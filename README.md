--npx expo install


Projeyi çalıştırmak için projeyi açtıktan sonra teminale «--npx expo start» yazıyoruz. Karşımıza 

QR code ve çeşitli çalıştırma seçenekleri çıkıyor.

Projeyi telefonda çalıştırmak için telefonumuza Expo Go uygulamasını kurmalıyız. 

Bu program sayesinde çıkan QR kodu okutup projemizde yaptığımız değişiklikleri telefon 

üzerinden kolay bir şekilde görebiliriz.

#Ben Kimim?

Benim adım Mehmet Faruk Akbulut. Trakya Üniversitesinde, Bilgisayar Mühendisliği bölümü 

öğrencisiyim. Bu Sayı Tahmin Oyunu benim Mobil uygulama dersi final ödevim. Umarım keyif 

almışsınızdır. Uygulamanın kodlarını Github hesabımdan bulabilirsiniz. Bana 

uygulamadaki hesaplarımdan ulaşabilirsiniz. Geri dönüşlerinizi bekliyorum...


![localhost_19006_](https://user-images.githubusercontent.com/78991543/212136291-efd08d5a-a530-4540-9168-d52b76a3eef7.jpg)

#Bu kod, "HomeScreen" adında bir React Native bileşeni oluşturur ve uygulamanın anasayfası 

olarak render edilir. Bileşen, useEffect kanca kullanarak cihazın geri düğmesine dinleyen 

bir olay dinleyicisi ekler ve geri düğmeye basıldığında kullanıcıya uygulamadan çıkmak 

istediğini soran bir uyarı oluşturur. Ayrıca, 'navigation' prop'unu kullanır, böylece 

düğmeler basıldığında diğer ekranlara geçiş yapar. Bileşen ayrıca expo-linear-gradient 

kütüphanesinden LinearGradient bileşenini kullanarak anasayfanın arka planı için bir gradient 

oluşturur. Bileşen ayrıca 'TouchableOpacity' ve 'Alert' bileşenleri kullanarak butonları ve 

alert diyalogları oluşturur.

![localhost_19006_ (1)](https://user-images.githubusercontent.com/78991543/212136296-c113d13b-8e1f-4604-b64d-e7d691a04faa.jpg)

#Bu kod, "GuessScreen" adında bir React Native bileşenini oluşturur ve kullanıcının 

1 ile 100 arasında bir sayıyı 10 tahmin veya daha azda tahmin etmeye çalıştığı bir 

oyunu yaratır. Bileşen useState hook'unu kullanarak oyunun durumunu yönetir, doğru 

sayı, kullanıcının mevcut tahmini, yapılan tahmin sayısı, tahminin sonucu, önceki 

tahminlerin bir dizisi, en iyi skor, oyuncunun adı ve kayıtların bir dizisi dahil. 

Bileşen ayrıca metin girişini işleme, bir tahmin yapmayı, oyunu sıfırlamayı ve 

belirli düğmelerine basıldığında dış web sitelerine bağlantı kurmayı işleyen birçok 

işlev de içermektedir. Bileşen ayrıca expo-linear-gradient kütüphanesinden LinearGradient 

bileşenini kullanarak oyun ekranının arka planı için bir gradient oluşturur.

![localhost_19006_ (2)](https://user-images.githubusercontent.com/78991543/212136300-eaaca2ec-b358-47a1-8c00-607a01d62487.jpg)

#Bu kod, "HowToScreen" adında bir React Native bileşenini oluşturur ve "GuessScreen" 

oyununun nasıl oynandığını gösterir. Talimatlar "instructions" adında bir dizi 

olarak saklanır ve FlatList bileşeni kullanılarak görüntülenir. Talimatlar 

ScrollView kullanılarak görüntülenir ve kullanıcının talimatları kaydırmasına 

izin verir. Bileşen ayrıca expo-linear-gradient kütüphanesinden LinearGradient 

bileşenini kullanarak oyun ekranının arka planı için bir gradient oluşturur. 

Bileşen sadece ekranda metin görüntüler ve kullanıcı girdisi işlememektedir.



![localhost_19006_ (3)](https://user-images.githubusercontent.com/78991543/212136303-a34340ab-0ed0-40f7-9940-d8d11476d58d.jpg)

#Bu React Native kodu, uygulamayı yazan kişi hakkında bilgi sağlar. Kod, yazara ait 

bilgileri (ad, okul, öğrenim durumu vb.) içeren bir metin ve yazara ait sosyal medya 

profillerine (Instagram, LinkedIn, Github) erişebilmek için butonlar içermektedir. 

Kod ayrıca, uygulamayı kullanıcıya beğendiyse ve yazara geri dönüş yapmak istiyorsa, 

e-posta gönderebilme özelliğini de içermektedir. Bu özellik sadece telefonun e-posta 

uygulaması yüklüyse çalışacaktır.

