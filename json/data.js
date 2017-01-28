var dataList = [
//{"name":"表示名", "jsonFile":"json file name", "youtubeId":"Youtube ID", "offset" : "(+ or -) offset in msec"},

// ====== 2016-2017 data ======

// 2016/11/21
{"name":"A01.品川→府中街道→向ヶ丘遊園[V/-](16/11/21)",   "jsonFile":"20161121-1632-shinagawa-mukougaoka_full.json",              "youtubeId":"SvQYThJZvr4", "offset":"-16500"},
{"name":"A02.高津→渋谷→飯田橋GAT[V/-](16/11/22)",        "jsonFile":"20161122-0918-takatsu-iidabashi_full.json",                 "youtubeId":"t41hnYzxrdI", "offset":"-25000"},

// 2016/11/28
{"name":"A03.筑波上り[V/-](16/11/28)",                   "jsonFile":"20161128-1614-tsukuba-up_full.json",                        "youtubeId":"aHDqG481a1s", "offset":"-5000"},
{"name":"A04.筑波下り[V/-](16/11/28)",                   "jsonFile":"20161128-1632-tsukuba-down_full.json",                      "youtubeId":"NLRhP1pHDyA", "offset":"1000"},

// 2016/12/12
{"name":"A05.芝浦→大橋JCT→大井JCT→芝浦[V/-](16/12/12)",  "jsonFile":"20161212-1458-shibaura-ohashiJCT-shibaura_full.json",       "youtubeId":"tBjuUa7cDJE", "offset":"-5500"},
{"name":"A06.芝浦→江戸川橋JCT→汐留[V/-](16/12/12)",      "jsonFile":"20161212-1551-shibaura-edogawa-shiodome_full.json",         "youtubeId":"CV-n7UlzB2c", "offset":"-9000"},

// 2016/12/16
{"name":"A07.飯田橋→大久保→東新宿[V/-](16/12/16)",       "jsonFile":"20161216-1517-iidabashi-higashishinjuku_full.json",         "youtubeId":"wj9q2yNm2LM", "offset":"-13000"},
{"name":"A08.東新宿→外苑→麻布十番[V/-](16/12/16)",       "jsonFile":"20161216-1533-higashishinjuku-azabujuban_full.json",        "youtubeId":"AJWDYP_2Enw", "offset":"15000"},
{"name":"A09.麻布十番→汐留→森下[V/-](16/12/16)",         "jsonFile":"20161216-1616-azabujuban-morishita_full.json",              "youtubeId":"GAwx673jIzQ", "offset":"11000"},
{"name":"A10.森下→蔵前→御徒町[V/-](16/12/16)",           "jsonFile":"20161216-1701-morishita-okachimachi_full.json",             "youtubeId":"sInp6i9pqDY", "offset":"6500"},
{"name":"A11.御徒町→本郷(渋滞あり)[V/-](16/12/16)",      "jsonFile":"20161216-1719-okachimachi-hongo_full.json",                 "youtubeId":"8wmNguIJCTw", "offset":"2000"},

// 2016/12/30
{"name":"A12.小田原→芦ノ湖[V/-](16/12/30)",              "jsonFile":"20161230-0846-5th-odawara-ashinoko_full.json",              "youtubeId":"1Hkrldnd99M", "offset":"3000"},
{"name":"A13.芦ノ湖→塔ノ沢[V/-](16/12/30)",              "jsonFile":"20161230-1000-6th-ashinoko-tounozawa_full.json",            "youtubeId":"_9whhDHAx8Q", "offset":"3000"},
{"name":"A14.国府津→大磯[V/-](16/12/30)",                "jsonFile":"20161230-1200-7th-kouzu-ooiso_full.json",                   "youtubeId":"7vpxYmM95ek", "offset":"-3500"},
{"name":"A15.袖ヶ谷浜→鵠沼[V/-](16/12/30)",              "jsonFile":"20161230-1224-8th-sodegahama-kugenuma_full.json",           "youtubeId":"OQ53I30MBmA", "offset":"2500"},
{"name":"A16.保土ヶ谷→鶴見[V/-](16/12/30)",              "jsonFile":"20161230-1352-9th-hodogaya-tsurumi_full.json",              "youtubeId":"ure06bUSneY", "offset":"2000"},
{"name":"A17.大井町→銀座[V/-](16/12/30)",                "jsonFile":"20161230-1446-10th-ooimachi-ginza_full.json",               "youtubeId":"vi76TBB4HzI", "offset":"1500"},

// 2017/01/10
{"name":"A18.羽田空港→ディスニーランド[V/M](17/01/10)",  "jsonFile":"20170110-1548-haneda-disney_full.json",                     "youtubeId":"6z_v8qb79lk", "offset":"2500"},
{"name":"A19.千葉→幕張[V/M](17/01/10)",                  "jsonFile":"20170110-1818-chiba-makuhari_full.json",                    "youtubeId":"JHRE25_EKkQ", "offset":"4500"},
{"name":"A20.幕張→飯田橋[V/M](17/01/10)",                "jsonFile":"20170110-1934-makuhari-iidabashi_full.json",                "youtubeId":"PTWkc_nxckk", "offset":"7000"},

// 2017/01/12
{"name":"A21.大和PA→芋川[V/M](17/01/12)",                "jsonFile":"20170112-1416-yamatoPA-imokawa_full.json",                  "youtubeId":"9kqAYy7LsI8", "offset":"6500"},
{"name":"A22.山古志[V/M](17/01/12)",                     "jsonFile":"20170112-1438-yamakoshi_full.json",                         "youtubeId":"ugToZaBs41s", "offset":"5000"},
{"name":"A23.小千谷→越後川口[V/M](17/01/12)",            "jsonFile":"20170112-1553-ojiya-echigokawaguchi_full.json",             "youtubeId":"jq5JtAdzaHY", "offset":"5000"},
{"name":"A24.北堀之内駅→薬師スキー場[V/M](17/01/12)",    "jsonFile":"20170112-1614-kitahorinouchi-yakushi_full.json",            "youtubeId":"f_QU_PyPeLQ", "offset":"11000"},
{"name":"A25.六日町→石打丸山[V/M](17/01/12)",            "jsonFile":"20170112-1808-muikamachi-ishiuchimaruyama_full.json",       "youtubeId":"tCEvV8CcXDM", "offset":"6000"},
{"name":"A26.越後湯沢[V/-](17/01/12)",                   "jsonFile":"20170112-1838-echigoyuzawa-NASPA_full.json",                "youtubeId":"awjHjrXXlmQ", "offset":"3000"},
{"name":"A27.NASPA→三国トンネル[V/M](17/01/12)",         "jsonFile":"20170112-1851-NASPA-mikuni-tunnel_full.json",               "youtubeId":"H5jqXbNYmzw", "offset":"3500"},
{"name":"A28.三国トンネル→みなかみ町永井[V/M](17/01/12)","jsonFile":"20170112-1924-mikuni-tunnel-nagai_full.json",               "youtubeId":"o9yxhzpt2ec", "offset":"-2000"},
{"name":"A29.みなかみ町永井→月夜野[V/-](17/01/12)",      "jsonFile":"20170112-1933-nagai-tsukiyono_full.json",                   "youtubeId":"2sHHi3NzMeQ", "offset":"7000"},
{"name":"A30.高坂PA→狭山PA[V/M](17/01/12)",              "jsonFile":"20170112-2126-takasaka-sayama_full.json",                   "youtubeId":"rUKWcrdjj1c", "offset":"9000"},
{"name":"A31.狭山PA→入間[V/M](17/01/12)",                "jsonFile":"20170112-2142-sayama-iruma_full.json",                      "youtubeId":"UUTfy7_5ilQ", "offset":"4000"},
{"name":"A32.入間→横田基地→拝島[-/M](17/01/12)",         "jsonFile":"20170112-2154-iruma-yokota-haijima_full.json",              "youtubeId":"AIkYQuzMP0w", "offset":"3000"},

// 2017/01/15
{"name":"A33.王禅寺→稗原[V/M](17/01/15)",                "jsonFile":"20170115-0910-ozenji-hiehara_full.json",                    "youtubeId":"vaU2YPuQf4k", "offset":"3000"},
{"name":"A34.稗原→東名川崎[V/M](17/01/15)",              "jsonFile":"20170115-0925-hiehara-tomeikawasaki_full.json",             "youtubeId":"Tc43NpbBSJE", "offset":"28000"},
{"name":"A35.芝浦PA→浜崎橋→北の丸[V/M](17/01/15)",       "jsonFile":"20170115-1036-shibauraPA-kitanomaru_full.json",             "youtubeId":"TJal2XvfvlY", "offset":"7500"},
{"name":"A36.赤坂見附→迎賓館→外苑[V/M](17/01/15)",       "jsonFile":"20170115-1141-akasakamitsuke-gaien_full.json",              "youtubeId":"Do_Flpct1BM", "offset":"2500"},

// ====== 2015-2016 data ======

// 2015/12/21
{"name":"B01.浅草寺雷門→言問橋",                    "jsonFile":"20151221-asakusa-skytree.json",                         "youtubeId":"EM_8aY3Y2D0", "offset":"0"},
{"name":"B02.日本橋→銀座→霞ヶ関",                   "jsonFile":"20151221-nihonbashi-ginza.json",                        "youtubeId":"JRqdMOUJjHg", "offset":"0"},
{"name":"B03.霞ヶ関→二重橋→東京駅",                 "jsonFile":"20151221-kasumigaseki-tokyo.json",                      "youtubeId":"mnqhFPT1Uv4", "offset":"0"},

//2015/12/22
{"name":"B04.四谷→新宿",                            "jsonFile":"201512221314-yotsuya-shinjyuku.json",                   "youtubeId":"mKvh6crqdW0", "offset":"3000"},
{"name":"B05.笹塚→桜上水",                          "jsonFile":"201512221332-sasazuka-sakuajyosui.json",                "youtubeId":"m9puNHC_svo", "offset":"0"},

//2016/01/07
{"name":"B06.丸の内→日本橋→銀座(Theta)",            "jsonFile":"201601072034_marunouchi_nihonbashi_ginza-theta-back.json",  "youtubeId":"51nWesfqCco", "offset":"115000"},
{"name":"B07.丸の内→大手町(Theta)",                 "jsonFile":"201601072119-marunouchi-ohtemachi-theta.json",          "youtubeId":"4Tbr21sr68o", "offset":"41000"},
{"name":"B08.京橋→銀座→霞ヶ関(Theta)",              "jsonFile":"201601072137_yaesu_ginza_kasumigaseki-theta.json",      "youtubeId":"mFaoxopr4Hs", "offset":"5000"},
{"name":"B09.霞ヶ関→三軒茶屋",                      "jsonFile":"201601072213_kasumigaseki_sangenjyaya.json",            "youtubeId":"I4ZdZSh5Xoc", "offset":"3000"},

//2016/01/22
{"name":"B10.雷門→スカイツリー(Theta)",             "jsonFile":"201601221415_kaminarimon_skytree.json",                 "youtubeId":"4sNvgC4y_Jg", "offset":"3000"},
//{"name":"11.レインボーブリッジ→東京タワー(Theta)","jsonFile":"201601221520_rainbow-bridge_tokyo-tower.json",          "youtubeId":"oRQBzqJfzNw", "offset":"0"}
{"name":"B11.レインボーブリッジ→東京タワー(Theta)", "jsonFile":"20160122_shiohama_tokyo-tower.json",                    "youtubeId":"oRQBzqJfzNw", "offset":"4000"},

{"name":"B21.国分寺三小前→国分寺市本多",            "jsonFile":"201512221602-kokubunjifumikirimae.json",                "youtubeId":"6e5WoNiC1_w", "offset":"1000"},
{"name":"B22.国分寺市本多→国分寺三小前",            "jsonFile":"201512221607-kokubunjifumikirimae2.json",               "youtubeId":"8t8ruhDXnYM", "offset":"1000"},
{"name":"B23.恋ケ窪→国分寺郵便局",                  "jsonFile":"201512221615-koigakubofumikiri.json",                   "youtubeId":"Hx8e13tzF5Q", "offset":"0"},
{"name":"B24.国立駅北→一橋大学→富士見台郵便局",     "jsonFile":"201512221623-kunitachikita-fukushicenter.json",         "youtubeId":"d19Vesu3YAM", "offset":"2000"},
{"name":"B25.一橋大学→国立駅ロータリー→一橋大学",   "jsonFile":"201512221752-hitotsubashi-kunitatchieki.json",          "youtubeId":"8HAftEj0FOo", "offset":"1000"},

//2016/01/10
{"name":"B26.多摩東公園→諏訪下橋",                  "jsonFile":"201601101257_tama-higashikouen_suwa-shimobashi.json",   "youtubeId":"A33XXZLlUrE", "offset":"2000"},
{"name":"B27.多摩ニュータウン周遊",                 "jsonFile":"201601101304_tama-newtown.json",                        "youtubeId":"-0CixeF10-A", "offset":"2000"},

//2016/01/11
{"name":"B28.高津→等々力アリーナ→飯田橋(no video)", "jsonFile":"201601111435_takatsu_todoroki_iidabashi_no-video.json", "youtubeId":"mzvpETDBkgA", "offset":"0"},

//2016/01/20
{"name":"B29.金程中→千代が丘小→西生田小",           "jsonFile":"201601200813_school_kanahodo_nishi-ikuta.json",         "youtubeId":"lndrQjpslf4", "offset":"3000"},
{"name":"B30.生田駅前→向ヶ丘遊園駅前",              "jsonFile":"201601200834_ikuta-ekimae_mukougaokayuen-ekimae.json",  "youtubeId":"y-NyWE5Ygx0", "offset":"1000"},

//2016/01/17
{"name":"B41.柿生→あざみ野→ランド→新百合",          "jsonFile":"201601172319_kakio_shinyuri.json",                      "youtubeId":"D7xi99W1JCo", "offset":"1000"},

//2016/01/18
{"name":"B42.生田→成城",                            "jsonFile":"201601181000_ikuta_seijo.json",                         "youtubeId":"uMYdBeZuq98", "offset":"2000"},
{"name":"B43.大蔵→首都高→飯田橋",                   "jsonFile":"201601181026_toshin-yuki_shutoko.json",                 "youtubeId":"sZ3bmQaaSNU", "offset":"1000"},

//2015/12/28
{"name":"B51.平塚PA→大磯",                          "jsonFile":"201512280815-hiratsuka-ohiso.json",                     "youtubeId":"biea463KhXA", "offset":"2000"},
{"name":"B52.小田原→箱根関所",                      "jsonFile":"201512280853-odawara-hakone.json",                      "youtubeId":"pyYFwrK8aO8", "offset":"5000"},
{"name":"B53.箱根→宮ノ下",                          "jsonFile":"201512280942-hakone-miyanoshita.json",                  "youtubeId":"GxKzEOtHjKs", "offset":"1000"},

//2016/01/08
{"name":"B61.三芳PA→高坂PA",                        "jsonFile":"201601081111_miyoshi-PA_takasaka-PA.json",              "youtubeId":"r6W0iL3XwrE", "offset":"2000"},
{"name":"B62.湯田中→10号カーブ",                    "jsonFile":"201601081428_yudanaka-10th-carve.json",                 "youtubeId":"QEPskzi2gWM", "offset":"1000"},
{"name":"B63.潤満滝標識付近→丸池",                  "jsonFile":"201601081443_jyunmantaki_maruike.json",                 "youtubeId":"4BCmukRaiQU", "offset":"3000"},
{"name":"B64.蓮池→信大自然教育園バス停付近",        "jsonFile":"201601081450_hasuike_shizenkyouikuen.json",             "youtubeId":"Waj-Rsgn2zU", "offset":"1000"},
{"name":"B65.三角池→木戸池(no video)",              "jsonFile":"201601081456_sankakuike_kidoike_no-video.json",         "youtubeId":"s8Vrc6Rsbbo", "offset":"0"},
{"name":"B66.前山ゲレンデ→蓮池(no video)",          "jsonFile":"201601081507_maeyama_hasuike_no-video.json",            "youtubeId":"QU6A4823gag", "offset":"0"},
{"name":"B67.ジャイアント入り口→琵琶池下(Theta)",   "jsonFile":"201601081540_giant-iriguchi_biwaike-shita_theta.json",  "youtubeId":"CODqZnJ3-Pc", "offset":"7000"},
{"name":"B68.琵琶池下→蓮池(Theta)",                 "jsonFile":"201601081545_biwaike-shita_hasuike-theta.json",         "youtubeId":"CSFsGVeLEuA", "offset":"5000"},
{"name":"B69.蓮池→坊平橋",                          "jsonFile":"201601081556_hasuike_bouhirabashi.json",                "youtubeId":"BCSmu69qzsM", "offset":"2000"}

];


