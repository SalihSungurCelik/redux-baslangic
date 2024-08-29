# State Yönetimi

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir.
- Prop Drilling: Bileşenlerin yukarıdan aşağıya veri taşıması.
- Context API: Uygulamadaki state'i oluşturduğumuz merkezlerden yönettiğimiz state yönetim aracı.
- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken state'lerin yönetildiği merkezi state yönetim aracı.

# Neden Redux

- Kod Tekrarını önler.
- Performansı arttırır.
- Bileşen içerisindeki karışıklığı azaltır.
- Hata ayıklama daha kolaydır.
- Orta ve büyük ölçekli projelerde stat'i yönetimi daha kolay hale getirir.

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposudur.

2. Reducer: Aksiyondan aldığı talimata göre store'da tutulan verinin nasıl değişeceğine karar veren fonksiyon.

3. Action: Store'daki state'i güncellemek için reducer'a gönderdiğimiz emir/haber.

- - Action 2 değere sahip bir objedir.
- - type: Action'ın görevini tanımlauyan string ("TODO_EKLE")
- - payload: gönderilen eylemin verisi

4. Dispatch(Sevketme): Action'ın gerçekleştiğini reducer'a haber veren method.

5. Subscribe (Abone Olma): Bileşenlerin store'da tutulan verilere erişimini sağlama (useContext, useSelector)

6. Provider (Sağlayıcı): Store'da tutulan verileri uygulamaya sağlar.

# Gerçek Hayattan Örnek

1. Store: Okulun Binası.

2. Reducer: Okulun yönetim ekibi(müdür, müd. yard.)

3. Action: Öğrencinin sınavı geçmesi / yeni kayıt | okuldan atılması

4. Dispatch(Sevketme): Sekreter / nöbetçi öğrenci / Öğretmen olayları bildirir.

5. Subscribe (Abone Olma): e-okul sistemi(veri alma)

6. Provider (Sağlayıcı): okuldaki organizasyon veya hizmet sağayıcısı

# Redux Kurulum Aşamaları:

- `redux` `rect-redux` paketlerini indir.
- reducer/reducer'ların kurulumunu yap
- store kurulumunu yap.
- store'u projeye tanıt.
