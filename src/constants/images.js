const imagenes = {
	assert:
		'https://lh3.googleusercontent.com/pw/AMWts8AVkLq5xDMlL6fWJN_C_JvN87xwoMCpwPle7sEfexhmzfRrcpProuAPuItj34NQ5nASClaoMoF-t0VcTt2J3gqglVGiF1WMXQY0JKnMbN2IBpwzA9A06zzgs_Xa9NT9_yADNz1M-_NrwOHPPDHw2eTb=s400-no?authuser=0',
	globant:
		'https://lh3.googleusercontent.com/pw/AMWts8CP6OoOU0mzkyGiKH2--50ZfXhTG8kC9Or1JH1VgLxyujderjO1upsBFuKMBBdVfUI-lQKHZmiK0mMmAzK7IPRmA8v2FXeIA3nhndAOV8nnXAVYhi8XtJCAcCYS2M-XaNOXnHqNHPMs2VGuR-WllBlL=s400-no?authuser=0',
	nicona:
		'https://lh3.googleusercontent.com/pw/AMWts8BA0iRC3olrjmVWbgR1jZfXDy9k4ZZiqGfQCrj-63YmxgEdMyuGWksIy25dcboOrim5qurb3beH6pZfDGuaneURRKtlw9VvW9iaMUuN28PfjMclytBEtxsSuAp0xpTmt4L1oBqWupnpoq573opKGPs7=s400-no?authuser=0',
	kurzza:
		'https://lh3.googleusercontent.com/pw/AMWts8Dso1ezonssUx53WaSwUSVsM6_MOq8xoSqTQWA4GtFdCdxYn5lvIzRsuwFZTWn7LmTg4jejdN2Uw_jJGq3ZJFGDuarnzs8A_pZ4phonPrirNvZJnn5h4EdHIOhiQ9ARqAGaBePAKvg8tTS9KFzmrJS-=s400-no?authuser=0',
	udemy:
		'https://lh3.googleusercontent.com/uBHHZ_DHmjsdVxzXMO1XqmoqCvPMPSoYzIBlH9n3y-a0j0_0LqA2mb0BhW0IZfhumAbUdE4bds_Q4AMbWXJA_MtFKHRG-7tWFVQT_SEQAUpIqq7CY8GlM-PA97XF8-sYI-T70raGxwmF2yC-bggIDW5tO319v9Xsrr26ZYZKBp8NuiO4McCRddBinez8jMgIwE6PvcixGgLyzD7OoGv5xsbeM5dPFL1T0KcHUAwM0Mp2RPbIlT8MIpJWbkO_Ol9q6ubzSnb81yvd9aKWj79Z4tEz4-0HkLXjWTX8xX8dEQXDNhfB2JF25CSk2xoLLrKCL5eY5jbJr1XlG8rwklAfjxafGkUtXiEwH81yy8g27dviZAPDCr4mRVVCMFJayaSPK3cWQd9vvk0oE9M-zUW6sGcOXa6-1FTtU6V-hldwYWCsEfnhFqj5Y8gceUZ7iPs9C7jdRSkew144luIVw7X-fE3O25t455q_Yfl7STS3pFelrldr2Y5b1R0JhWGeT5tNSB6o9Xzt8oyVQm-ZSOdMjHnRITT98RhvJ1qjvtZUmMsor_MEMolIjQEaMcaHinLB3xKR_OSVFIFY-ltkyIxjJ82Clr2Fj5iVeIpLT2e0fIuS1gz0U4GJ9bycU2OrKGrKxPaBXiAq6acJd-_l5B3LGhGlZxpg1pq0j6jz-BI9tMKG6mgpYw9nG0FEXSiuIVGpkequ1aZSJvpm9NY-SiPK76siLLQhhggjAa2MNmEClzceCjCGZTxZMuC8TmnLwcLETRFXgkJSdLvRMCfdT8chnxe74nC8ZWdGTfpcnfkZFOyc23D6G9t7nHl5Q_O5X4eu0x8cesegrcgSoGHBEiEDUIpkSw4OppOVNVyxMXQbp740vO_gQOKhBoH_y50PMgFAEBXVadTofr2c4rwYElltNXzZt2Dtjp_KYJ-tMX117GShdxGkkibC2t8xXhVSqJUHZQferuG6MY7B10JF4J3apYrxUcsDS-dBLvd_bVG2MnQm1JQKObDZlOyVbIklyQKv35W6GZzWakC0wLbRjBAEYAGWo2aKXqEV3ShLp4V7kHMtqplYmR1GIefDBpP6k4Vy2CfDfFmdoPQfPGu6HnnHDC7HGrumrQ=s400-no?authuser=0',
	acosta:
		'https://lh3.googleusercontent.com/tZZLD-bNHLsLy0dg5I9djRKitfnVAvxw1Jpz441tMVZpAK0l--1AmNksVv9KInfsg6UEPGZ_E8qzrU0K3XUGvolpqaC2GzZZCelDFbacLAgmy1Ta-OgqFDlwoLwdo0WJy4Renb1ZevTyknTMyrkNAXmHg9mLIMz_k-AkAyw0fIcDWdZAUqQuZENB1m9szfdr3HDM3-fpnxQzek6WolPemcTeM6WCWBwaD02NbSjeyVEP8JoGAcYN-2vgbgmD0RLTV04PcKkXIfPnrDrcn55iKZJG7VctDTjHQ8JVT8b5hz8ip81XHw7HQFOTc34dzFtrE-pGgblSPJi15AaiQcFKkF2LDX-obbrQ02ngIcZHdwyj0ggLsEbw6KEjlYMTxvSEOeDQxRebk-WYmHNkpp1_Jv6xRugjLT9VDaYk6epSHVaIWDqgqdyZejQkXuMpfKOaALWoJ4dBwELbGgLYvOYjrQ8JlRWJRr53Z8q8c2rea4OibA7HfzBnR75mMvMltyu9wViesOrM27osLkkMhQbmF1XtfKQsiag8id9XnhUmMhOXHVEBgraFV6m99HbrUHh7TKwb5zzK3tHaVvJmentUJ1I80BGQhOXGT8gEE1av3D3qFQJRiWdm2Hc_bwNRnkAwAvrmvCIxapR9VXTJYlXjUfeQtf43pF--NrZbzf1Tp9RK4JjfMaP-is1vmJm1HRyJrWxOQYmVzyb7Kdmjmsy9EOBBgWnxkOo3htgVQX8XbrEpO7sNR2_18kancTpksetqfXgAvXX9QLiFOgqaL2yigQr-2Jkfes3bwj37I7-2vpjxbOrBWFzxGBpGiUd47fGKH-KojZvEGdC9H7clayBdUBN8ni-AnHdCnVoPDj7DLtLOHa8YjlWpkPeK9If4wbZ3B9m3DVHwM2EQNCIRd59HOXzhw7YBZHhjGgHuSu3rH3ZgrW4_1CCvHbXri97wNIFlkTXD4GE04Y94BMrdNizCo1gixa09oefer_uv30DjqAO9ow58dyU6swy5rk1tae6L7AFGLlvt1-V22nlyISx5hooQsIgUFH7OKXiaGmh8gL6i4LwoGfCP37Va3GfNo00_-qVAatUyy0UmzJYnD-fufO4TBX2rjw=s400-no?authuser=0',
	utn: 'https://lh3.googleusercontent.com/qVL-Vq44t0q_b8qh_TRAzgPYPhNSp2rPpo72AtzBLQrzChgIAmctDVW9UstLy5QBX9VjFwyyngq9ehOLKlde4xNPF8KVCXxoCr4b7nJMqvOBVzyaYNjjVJQ6m6ELZjWHFNaGKp2fCAcyvYH1PDH6L0O5etNzRwT3CAUOsbr1jrdgFEQJLhz6FakAphAuPJs2woVlNETm38RpZnwlwwwkec04rX4_LTRjTtf-w1LmRIbiqYXodDEVSBc4UugvuX2l6jAWOJettJquEsasTpnbXoLAaqp7s__qykluH4EN9jmpYZa8tQ7BAtRWhKrqzQbXeDnKLOJlHZiKIyIyGkJmCDJ25F1tg2kzL3KTpFnYQ5PWkpoThq0uVVPOealbL7IVt5KLQsAXxoayPLWHgZSVduVheehe7i_rlNI3x2TTpxfTaojfhstKbOeZyYWSstAjifXRgblEJfnCL9cOEN5frWCX8Kdgtz8wykPzRmlu2EGoq3W4-Yuu5IHtZVYDoCtnZE7GuShEq64R_c7EcxLL-fRRyF8ch_5J5BMEcdpzvPVbHb9SbuzIrPHVdMZql5qMMEhfCWbxhEaDhMWgVVRnOpS7NtfFpfGb9X5AGu9rK2IMMbaE3zYr_RBzDEVZrDaLtEiC5SV2OHId3pJ6c9m4_hru9uHL9bj01EiameXcurC6cvaxfZ6t3F8PkB4sb1dr3S2F4NVdIU6e-zlst80OLTSGVgq5Us_vBYtT6XQlTMJdbS-L596FUjxxznDb_Ep1LkPubi2FtD0LAPvr_iFHOKCfWhHe3sDEuZCrXSEyBFINBQNvkMjbTuEJ4zqkSf-rUDnMmqoQo4PII0jxqIPh0HQ7Q_uM6qFfoz_ypAu6uap0AP1E_I3BYompSeL9p_gkAbQBys9Bx4UZflz5VMqsaHyjAgiYGBVP-9u_fMeebJ9q9FTr4eLUWcMEIhJPdgnoaQUIG1jM11Dqrvtj25J4h7yo1XXrmICHqcFxgzctbyEszCh9Xuyw2ScNvkaQfRDJKl321u6j1kPVww5SVhHxnrdYfSKr_kObOZJr8PaKHz9paEw8L6Z5GQ70xALUHDQVEuJjtGCln-luayT21alrA6_B2o0NQw=s400-no?authuser=0',
	davinci:
		'https://lh3.googleusercontent.com/7Cci31w7IEwixICTNRp8SDKGsTHed3ciy4Gh4w9jKzU-ywDnsl9Bn2y7jLEp8bxerCBuAH51GSFnjlmqO4c5QAsLqnAp_IW57kPCnHfQ-tuprbdSN2d29KRQXXhSiaDi5HVYZkk8x1E0P66cEtsXuqY33lLJuA1skiFiKOjnIPyQ-HF0FBVletKJH4yz6yKax3DifFkn0tAsDbZ-czgRaXl-Ru6vJR-Sei8I6TYQZofM1SNou-RZn7ryuYiqyuKq4oN5lc-RdvjAYEB5YtW_C1owhPwc9vF_Z9xZApcRdTGE96jz3qI3xD6DmGlxLwE4feHSBmEC0nAJcKBFQRjNQGttdvO-qB3tPSYzdcS5QM1_G0eykiEeqlbsMqcoJWwa83Ab-K6pije9zflMHtLM-pyBzX5HiRr0CVObLVctZzYG2p4A6G9FVR1UuNYXuD8zvqTsvHL34jCUtzUZKV7QuMByoLG5eQ5lmpLQlkCb51NBkgtAZTzt5-lpwSF1tZngPufGuZ2WBgyAQLO2DaMgWK-Qe-4Axkt_FCZrktgscj2ACS37L0OVOqKX_DD00QW1nrHEYUqgJWcuU6l-CjHSj2ZLUdFaWwc808JDCK1P28QkwTYF94hVjETfQHKeuha00IgepIJL7bZRBOkgEqxBxj9OzpiW0m6wEiTHH1upfxUZaAVE4AnlTan4XnsnIocynxCbBQwNWFJIJmVJ_4gRyWn2Mr2KuKnZOssJuslS3PdydKvJJEVK3rDXdf9AVGraGgpE6kHh4jsyUGw7lIiR40jlj20v6whTnAQJWPp1O3fLmU4a1v6q5MqfkX6Nk6cvxEDc2d__G0F52I13Kfn6IpcTmIg0nTxYovxW5maIXVqyUTn2dcoGkOFoYeBmS00UOwFOFCn67BJ4Qdilb7a_yE1a8QGmP2tq_2rvj3szvRYLqDKAPpiMnbLTql8d_OY3DeJ75VKOBkzOP92nif166B487bYJhk21c16-mGeap0rPHJZ5-puE_fYbc9Ddx---UJIlgReDnHANHmU7W8CLVrZz4SxoOYS_lyHxfsf8c2-ZsRaVsPA2WuMZtGeVYWcksfGjPvXrqFiHa0Fc8oDgjClj-w_9KQ=s400-no?authuser=0',
};

export default imagenes;
