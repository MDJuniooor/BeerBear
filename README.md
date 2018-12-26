<실행 방법>

- Django 서버 실행(Django v2.1.3, ngrok v2.2.8, Python v3.6.5  설치 선행됨)
1. 커맨드 입력 : pip install pipenv (가상환경 설치)
2. 다운받은 BeerBear\api 폴더로 이동
3. 커맨드 입력 : pipenv three(가상환경 생성)
4. 커맨드 입력 : pipenv shell(가상환경 접속)
5. 커맨드 입력 : pipenv lock -r > requirements.txt (패키지 텍스트 파일 생성)
6. 커맨드 입력 : python install -r requirements.txt (패키지 설치)
7. 커맨드 입력 : python manage.py runserver (서버 실행)
8. 커맨드 입력 : ngrok http 8000 (장고 서버 url 접근 허용)

(Django dependencies)
backcall==0.1.0
bleach==3.0.2
decorator==4.3.0
defusedxml==0.5.0
django-extensions==2.1.4
django-filter==2.0.0
django-model-utils==3.1.2
django-qr-code==1.0.0
django==2.1.3
djangorestframework-jwt==1.11.0
djangorestframework==3.9.0
entrypoints==0.2.3
graphviz==0.10.1
ipykernel==5.1.0
ipython-genutils==0.2.0
ipython==7.2.0
ipywidgets==7.4.2
jedi==0.13.1
jinja2==2.10
jsonschema==2.6.0
jupyter-client==5.2.3
jupyter-core==4.4.0
markdown==3.0.1
markupsafe==1.1.0
mistune==0.8.4
nbconvert==5.4.0
nbformat==4.4.0
notebook==5.7.2
numpy==1.15.4
pandas==0.23.4
pandocfilters==1.4.2
parso==0.3.1
pickleshare==0.7.5
pillow==5.3.0
prometheus-client==0.4.2
prompt-toolkit==2.0.7
pygments==2.3.0
pyjwt==1.6.4
pyparsing==2.3.0
python-dateutil==2.7.5
pytz==2018.7
pyzmq==17.1.2
qrcode==6.0
send2trash==1.5.0
six==1.11.0
terminado==0.8.1
traitlets==4.3.2
wcwidth==0.1.7
webencodings==0.5.1



-Django 서버 testing (Django server url 패스 요구)
url 패스에 /admin 추가, login id : customer1~5, password : anseotjd으로 접속
기본 url 패스에 아래 패스 추가하여 실행
/beers/?q=${keyword}/ -> 맥주 키워드 검색
/beers/recommend/ -> 맥주 추천
/beers/detail/${beer_id}/ -> 맥주 상세정보 검색
/beers/comments/${beer_id}/ -> 맥주 리뷰 더보기 
/beers/favorite/${beer_id}/ -> 내가 찜한 맥주 리스트 불러오기
/beers/review/${beer_id}/ -> 해당 맥주 리뷰 리스트 불러오기
/beers/review/${beer_id}/create/ -> 해당 맥주 리뷰 만들기
/beers/review/${beer_id}/delete/${review_id}/ -> 해당 맥주 리뷰 삭제
/beershops/?lat=${lat}&lon=${lon} -> 위치 기반 비어샵 검색
/beershops/search/${beer_id}/ -> 비어 기반 비어샵
/beershops/detail/${beerShop_id} -> 해당 비어샵 상세정보 보기
/beershops/favorite/${beerShop_id}/ -> 해당 비어샵 단골 리스트 불러오기
/beershops/review/${beerShop_id}/ -> 해당 비어샵 리뷰 리스트 불러오기
/beershops/review/${beerShop_id}/create/ -> 해당 비어샵 리뷰 만들기
/beershops/review/${beerShop_id}/create/${parent_id}/ -> 해당 비어샵 리뷰의 리뷰 만들기
/beershops/review/${beerShop_id}/delete/${review_id}/ -> 해당 비어샵 선택한 리뷰 삭제
chats/matching/ -> 매칭친구 불러오기
chats/customer/${customer_id}/ -> 선택된 친구 상세 정보 불러오기
/addbuddy/${buddy_id}/ -> 선택된 친구에게 대화신청하기
/approve/${buddy_id}/ -> 대화신청한 친구와 승인하여 챗룸 생성
/chatroom/ -> 채팅방 목록 불러오기
/chatroom/${chat_id}/  -> 선택된 채팅방 메시지 전부 불러오기
/chatroom/${chat_id}/message/ -> 메시지 전송
/chatroom/${chat_id}/ -> 혜택 받기
/users/profile/ -> 유저 정보 불러오기
/users/addstamp/${customer_id}/ -> 스탬프 추가하기
/users/coupon/ -> 내 쿠폰 리스트 보기
/users/coupon/${coupon_id} -> 선택된 쿠폰 큐알코드 보여주기
/users/beershop/ -> 관리하는 비어샵 정보 불러오기
/users/beershop/review/ -> 관리하는 비어샵 리뷰 보기
/users/beershop/review/${review_id}/ -> 해당 리뷰 답글 달기 
/users/beershop/review/${review_id}/update/ -> 내가 쓴 답글 수정
/users/beershop/review/${review_id}/${reply_id}/delete/ -> 선택된 답글 삭제
(ie 환경에서 제대로 열리지 않을 수 있음)

- 애플리케이션 실행 (yarn v1.12.3, node v10.13.0 설치선행됨, 핸드폰에 expo 애플리케이션 설치선행됨)
1. 다운받은 BeerBear\frontend 폴더로 이동
2. 커맨드 입력 : npm install (앱이 요구하는 dependencies 설치)
3. 커맨드 입력 : expo start
4. 팝업되는 Metro Bundler에서 "Tunnel ready" 메시지 확인 후 Connection 탭에서 "Tunnel" 선택
5. 출력된 qr코드를 핸드폰 expo 애플리케이션에서 스캔
(react-native Dependencies)
"@expo/samples": "2.1.1",
"axios": "^0.18.0",
"expo": "^30.0.1",
"link": "^0.1.5",
"native-base": "^2.8.1",
"react": "^16.3.1",
"react-dom": "^16.6.3",
"react-native": "https://github.com/expo/react-native/archive/sdk-30.0.0.tar.gz",
"react-native-button": "^2.3.0",
"react-native-comments": "^1.1.1",
"react-native-elements": "^1.0.0-beta7",
"react-native-gifted-chat": "^0.5.0",
"react-native-maps": "^0.22.1",
"react-native-navigation": "^2.2.0",
"react-native-router-flux": "^4.0.6",
"react-native-vector-icons": "^6.1.0",
"react-navigation": "^2.18.3",
"react-redux": "^5.0.7",
"redux": "^4.0.0",
"redux-persist": "^5.10.0",
"redux-thunk": "^2.3.0",
"semantic-ui": "^2.4.2",
"semantic-ui-react": "^0.83.0",
"util": "^0.11.1"
"jest-expo": "30.0.0"

(코드 확인시 별도의 code editor 설치 선행됨)
