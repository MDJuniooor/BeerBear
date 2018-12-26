import pandas as pd
import numpy as np
from collections import defaultdict
import os
current_file = os.path.abspath(os.path.dirname(__file__))
csv_filename = os.path.join(current_file, 'ratings.csv')
def recommendBeerList(customer_id):
    print(csv_filename)
    # 데이터 로드
    df = pd.read_csv(csv_filename, sep=',')
    # 데이터 변환
    df = df.set_index("user_id").iloc[:, 1:]
    df = df.stack()
    df = df.reset_index()  # (5325, 3)
    df.columns = ['user_id', 'beer_id', 'rating']
    # 추천 엔진 구축을 위해 pivot table로 변환
    beer_rating = df.pivot(index='beer_id', columns='user_id', values='rating')
    beer_rating = beer_rating.reset_index()
    # 사용자 사이에 유사도 구하기
    # python에서 corr()함수 사용
    sim_users = abs(beer_rating.corr())
    sim_users = sim_users.reset_index()

    # 평점 예측
    # 사용자 i를 가정한다.
    # 아직 평점을 매기지 않은 맥주 찾기
    dic = defaultdict(object)
    for i in range(len(sim_users)):
        rating_user = beer_rating.loc[:, ['beer_id', i]]
        # 사용자 i가 평가하지 않은 맥주를 추출
        beer_not_rating = pd.DataFrame(rating_user[rating_user[i].isin([0])]['beer_id'])

        # 원본 데이터에서 사용자 i가 평가 하지 않은 항목들만 가져오자 + 다른 사람은 평가한 맥주를 가져오자
        rating_i = df[df['beer_id'].isin(beer_not_rating['beer_id'])]
        rating_i = rating_i[rating_i['rating'] > 0]

        # 다른 유저와 corr()로 구한 유사도를 merge한다.
        rating_i = pd.merge(rating_i, sim_users.loc[:, ['user_id', i]], on='user_id')

        # 예측 rating을 구한다.
        rating_i["sim_rating"] = rating_i[i] * rating_i['rating']

        # 사용자 i가 평가한 맥주의 mean값을 가져 온다.
        rating_user[~rating_user[i].isin([0])].mean()

        anticipate = rating_i.groupby('beer_id')['sim_rating'].sum()/rating_i.groupby('beer_id')[i].sum()
        # print(anticipate.sort_values(ascending=False).head())
        dic[i] = anticipate.sort_values(ascending=False).head()

    return list(dic[customer_id].index)
