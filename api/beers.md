digraph model_graph {
  // Dotfile by Django-Extensions graph_models
  // Created: 2018-11-09 19:33
  // Cli Options: -a

  fontname = "Helvetica"
  fontsize = 8
  splines  = true

  node [
    fontname = "Helvetica"
    fontsize = 8
    shape = "plaintext"
  ]

  edge [
    fontname = "Helvetica"
    fontsize = 8
  ]

  // Labels


  django_contrib_admin_models_LogEntry [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    LogEntry
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Bold">content_type</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">user</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">action_flag</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">PositiveSmallIntegerField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">action_time</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">change_message</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">object_id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">object_repr</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_auth_models_Permission [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    Permission
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">content_type</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">codename</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  django_contrib_auth_models_Group [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    Group
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_contenttypes_models_ContentType [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    ContentType
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">app_label</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">model</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_sessions_base_session_AbstractBaseSession [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    AbstractBaseSession
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">expire_date</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">session_data</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">TextField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  django_contrib_sessions_models_Session [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    Session<BR/>&lt;<FONT FACE="Helvetica Italic">AbstractBaseSession</FONT>&gt;
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ItalicBold">session_key</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ItalicBold">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">expire_date</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">session_data</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">TextField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  rest_framework_authtoken_models_Token [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    Token
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">key</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">user</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">OneToOneField (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">created</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">DateTimeField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  django_contrib_auth_models_AbstractUser [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    AbstractUser<BR/>&lt;<FONT FACE="Helvetica Italic">AbstractBaseUser,PermissionsMixin</FONT>&gt;
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">date_joined</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">email</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">EmailField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">first_name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">is_active</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">is_staff</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">is_superuser</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">last_login</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">last_name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">password</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">username</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  users_models_User [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    User<BR/>&lt;<FONT FACE="Helvetica Italic">AbstractUser</FONT>&gt;
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">date_joined</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">email</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">EmailField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">first_name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">is_active</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">is_staff</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">is_superuser</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">BooleanField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">last_login</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">last_name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica Italic">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">password</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Italic">username</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Italic">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  beershops_models_BeerShop [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    BeerShop
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">owner</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">shop_image</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">ImageField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  beers_models_Beer [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    Beer
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">ABV</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">FloatField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">EST_CAL</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">IntegerField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">IBU</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">IntegerField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">avg_scr</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">FloatField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">brewery</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">city</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">country</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">description</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">image</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">ImageField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">name</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">ref</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">IntegerField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">state</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">style</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">CharField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  beers_models_BeerRating [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    BeerRating
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">beer</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">creator</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">score</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">IntegerField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]

  beers_models_BeerReview [label=<
    <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
    <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
    <FONT FACE="Helvetica Bold" COLOR="white">
    BeerReview
    </FONT></TD></TR>
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">id</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">AutoField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">beer</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica Bold">creator</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica Bold">ForeignKey (id)</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT FACE="Helvetica ">comment</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT FACE="Helvetica ">TextField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">created_at</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">DateTimeField</FONT>
    </TD></TR>
  
  
  
    <TR><TD ALIGN="LEFT" BORDER="0">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">updated_at</FONT>
    </TD><TD ALIGN="LEFT">
    <FONT COLOR="#7B7B7B" FACE="Helvetica ">DateTimeField</FONT>
    </TD></TR>
  
  
    </TABLE>
    >]




  // Relations

  django_contrib_admin_models_LogEntry -> users_models_User
  [label="user (logentry)"] [arrowhead=none, arrowtail=dot, dir=both];

  django_contrib_admin_models_LogEntry -> django_contrib_contenttypes_models_ContentType
  [label="content_type (logentry)"] [arrowhead=none, arrowtail=dot, dir=both];


  django_contrib_auth_models_Permission -> django_contrib_contenttypes_models_ContentType
  [label="content_type (permission)"] [arrowhead=none, arrowtail=dot, dir=both];

  django_contrib_auth_models_Group -> django_contrib_auth_models_Permission
  [label="permissions (group)"] [arrowhead=dot arrowtail=dot, dir=both];



  django_contrib_sessions_models_Session -> django_contrib_sessions_base_session_AbstractBaseSession
  [label="abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  rest_framework_authtoken_models_Token -> users_models_User
  [label="user (auth_token)"] [arrowhead=none, arrowtail=none, dir=both];

  django_contrib_auth_base_user_AbstractBaseUser [label=<
  <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
  <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
  <FONT FACE="Helvetica Bold" COLOR="white">AbstractBaseUser</FONT>
  </TD></TR>
  </TABLE>
  >]
  django_contrib_auth_models_AbstractUser -> django_contrib_auth_base_user_AbstractBaseUser
  [label="abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];
  django_contrib_auth_models_PermissionsMixin [label=<
  <TABLE BGCOLOR="palegoldenrod" BORDER="0" CELLBORDER="0" CELLSPACING="0">
  <TR><TD COLSPAN="2" CELLPADDING="4" ALIGN="CENTER" BGCOLOR="olivedrab4">
  <FONT FACE="Helvetica Bold" COLOR="white">PermissionsMixin</FONT>
  </TD></TR>
  </TABLE>
  >]
  django_contrib_auth_models_AbstractUser -> django_contrib_auth_models_PermissionsMixin
  [label="abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];

  users_models_User -> django_contrib_auth_models_Group
  [label="groups (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  users_models_User -> django_contrib_auth_models_Permission
  [label="user_permissions (user)"] [arrowhead=dot arrowtail=dot, dir=both];

  users_models_User -> django_contrib_auth_models_AbstractUser
  [label="abstract\ninheritance"] [arrowhead=empty, arrowtail=none, dir=both];


  beershops_models_BeerShop -> users_models_User
  [label="owner (beershop)"] [arrowhead=none, arrowtail=dot, dir=both];

  beershops_models_BeerShop -> beers_models_Beer
  [label="beer_list (sale_beershop)"] [arrowhead=dot arrowtail=dot, dir=both];


  beers_models_BeerRating -> users_models_User
  [label="creator (beerrating)"] [arrowhead=none, arrowtail=dot, dir=both];

  beers_models_BeerRating -> beers_models_Beer
  [label="beer (beerrating)"] [arrowhead=none, arrowtail=dot, dir=both];

  beers_models_BeerReview -> users_models_User
  [label="creator (beerreview)"] [arrowhead=none, arrowtail=dot, dir=both];

  beers_models_BeerReview -> beers_models_Beer
  [label="beer (beerreview)"] [arrowhead=none, arrowtail=dot, dir=both];


}
