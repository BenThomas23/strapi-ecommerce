"use strict";
(self["webpackChunkstrapi"] = self["webpackChunkstrapi"] || []).push([[3304],{

/***/ 41329:
/***/ ((module) => {

module.exports = JSON.parse('{"ComponentIconPicker.search.placeholder":"Bir ikon ara","attribute.boolean":"Mantıksal","attribute.component":"Bileşen","attribute.component.description":"Tekrarlayabileceğin alanlar grubu","attribute.customField":"Özel alan","attribute.date":"Tarih","attribute.dynamiczone":"Dinamik bölge","attribute.dynamiczone.description":"İçeriği düzenlerken bileşenleri dinamik olarak seç","attribute.email":"E-posta","attribute.enumeration":"Enumeration","attribute.json":"JSON","attribute.media":"Medya","attribute.null":" ","attribute.number":"Sayı","attribute.number.description":"Sayılar (tamsayı, kayan, ondalıklı)","attribute.password":"Parola","attribute.relation":"İlişki","attribute.richtext":"Zengin metin","attribute.richtext.description":"Biçimlendirme seçenekleri olan bir zengin metin düzenleyici","attribute.text":"Yazı","attribute.time":"Zaman","attribute.timestamp":"Zaman damgası","attribute.uid":"UID","attribute.uid.description":"Benzersiz kimlik numarası","button.attributes.add.another":"Başka bir alan ekle","button.component.add":"Bir bileşen ekle","button.component.create":"Yeni bileşen oluştur","button.model.create":"Yeni koleksiyon tipi oluştur","button.single-types.create":"Yeni tekil tip oluştur","component.repeatable":"(tekrarlayabilen)","components.SelectComponents.displayed-value":"{number} bileşen seçildi","components.componentSelect.no-component-available":"Tüm bileşenleri ekledin","components.componentSelect.no-component-available.with-search":"Aramanızla eşleşen bileşen bulunamadı","components.componentSelect.value-component":"{number} bileşen seçildi (aramak istediğin bileşeni yaz)","components.componentSelect.value-components":"{number} bileşen seçildi","configurations":"Kurulumlar","contentType.apiId-plural.description":"Çoğul API Kimliği","contentType.apiId-plural.label":"API Kimliği (Çoğul)","contentType.apiId-singular.description":"UID API yolları ve veritabanı tablolarını oluşturmak için kullanılır","contentType.apiId-singular.label":"API Kimliği (Tekil)","contentType.collectionName.description":"İçerik tipin ve tablo adın farklı olduğu durumlarda kullanışlıdır","contentType.collectionName.label":"Koleksiyon adı","contentType.displayName.label":"Görüntülenme adı","contentType.draftAndPublish.description":"Yayınlamadan önce girdilerin taslak halini yaz","contentType.draftAndPublish.label":"Taslak/Yayın sistemi","contentType.kind.change.warning":"İçerik tipinin çeşidini değiştirdiniz. API sıfırlanacak (routes, controllers, services).","error.attributeName.reserved-name":"Bu isim, diğer özellikleri bozabileceğinden, içerik tipi için kullanılamaz","error.contentType.pluralName-used":"Bu değer tekil olanla aynı olamaz","error.contentType.singularName-used":"Bu değer çoğul olanla aynı olamaz","error.contentTypeName.reserved-name":"Bu isim, diğer özellikleri bozabileceğinden, projede kullanılamaz","error.validation.enum-duplicate":"Mükerrer değerlere izin verilmez (yalnızca alfanümerik karakterler hesaba katılmıştır).","error.validation.enum-empty-string":"Kelime boş olamaz","error.validation.enum-regex":"En az bir değer geçersiz. Değerlerin içinde sayılardan önce en az bir alfabetik karakter olmalıdır.","error.validation.minSupMax":"Üst olamaz","error.validation.positive":"Pozitif sayı olmalıdır","error.validation.regex":"Regex ifadesi geçersiz","error.validation.relation.targetAttribute-taken":"Bu isim hedefte yer alıyor","form.attribute.component.option.add":"Bir bileşen ekle","form.attribute.component.option.create":"Yeni bir bileşen oluştur","form.attribute.component.option.create.description":"Bileşen tipler ve bileşenler arasında paylaşılır ve her yerden erişilebilir.","form.attribute.component.option.repeatable":"Tekrarlanabilir bileşen","form.attribute.component.option.repeatable.description":"Çok kayıtlı (diziler) içerikler, meta etiketleri, v.b. için ideal","form.attribute.component.option.reuse-existing":"Mevcut bir bileşeni kullan","form.attribute.component.option.reuse-existing.description":"Verilerini içerik tipleri arasında tutarlı kılmak için daha önceden oluşturulmuş bir bileşeni kullan.","form.attribute.component.option.single":"Tekil bileşen","form.attribute.component.option.single.description":"Gruplama alanları (adres, temel bilgiler, v.b. için ideal","form.attribute.item.customColumnName":"Özel kolon isimleri","form.attribute.item.customColumnName.description":"Bu veritabanı sütun isimleri servis yanıtları için daha kapsamlı bir biçimde yeniden adlandırmak için kullanışlıdır","form.attribute.item.date.type.date":"tarih (ör: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"tarih saat (ör: 01/01/{currentYear} 00:00)","form.attribute.item.date.type.time":"saat (ör: 00:00)","form.attribute.item.defineRelation.fieldName":"Alan adı","form.attribute.item.enumeration.graphql":"GraphQL için isim geçersiz kıl","form.attribute.item.enumeration.graphql.description":"GraphQL için varsayılan oluşturulan adı geçersiz kılmanıza izin verir.","form.attribute.item.enumeration.placeholder":"Örn:\\nsabah\\nöğlen\\nakşam","form.attribute.item.enumeration.rules":"Values (one line per value)","form.attribute.item.maximum":"En yüksek değer","form.attribute.item.maximumLength":"En yüksek uzunluk","form.attribute.item.minimum":"En düşük değer","form.attribute.item.minimumLength":"En düşük uzunluk","form.attribute.item.number.type":"Sayı biçimi","form.attribute.item.number.type.decimal":"ondalık (ex: 2.22)","form.attribute.item.number.type.float":"float (ex: 3.33333333)","form.attribute.item.number.type.integer":"tamsayı (ex: 10)","form.attribute.item.privateField":"Gizli alan","form.attribute.item.privateField.description":"Bu alan API yanıtında görünmez","form.attribute.item.requiredField":"Zorunlu alan","form.attribute.item.requiredField.description":"Bu alan boşsa kayıt oluşturamazsınız","form.attribute.item.text.regex":"RegExp ifadesi","form.attribute.item.text.regex.description":"RegExp ifadesi","form.attribute.item.uniqueField":"Benzersiz alan","form.attribute.item.uniqueField.description":"Aynı içeriğe sahip bir kayıt varsa kayıt oluşturamazsınız.","form.attribute.settings.default":"Varsayılan değer","form.button.add-components-to-dynamiczone":"Bölgeye bileşenleri ekle","form.button.add-field":"Başka bir alan ekle","form.button.add-first-field-to-created-component":"İlk alanı bileşene ekle","form.button.add.field.to.collectionType":"Bu koleksiyon tipine başka bir alan ekle","form.button.add.field.to.component":"Bu bileşene başka bir alan ekle","form.button.add.field.to.contentType":"Bu içerik tipine başka bir alan ekle","form.button.add.field.to.singleType":"Bu tekil tipe başka bir alan ekle","form.button.cancel":"İptal","form.button.collection-type.description":"Çoklu kayıtlar (makaleler, ürünler, yorumlar, v.b.) için ideal","form.button.collection-type.name":"Koleksiyon Tipi","form.button.configure-component":"Bileşeni ayarla","form.button.configure-view":"Görünümü ayarla","form.button.select-component":"Bir bileşen seç","form.button.single-type.description":"Tekil kayıtlar (hakkımızda, ana sayfa, v.b.) için ideal","form.button.single-type.name":"Tekil Tip","from":"kimden","listView.headerLayout.description":"İçeriğinin veri mimarisini kur","menu.section.components.name":"Bileşenler","menu.section.models.name":"Koleksiyon Tipleri","menu.section.single-types.name":"Tekil Tipler","modalForm.attribute.form.base.name.description":"Nitelik adında boşluk olamaz","modalForm.attribute.form.base.name.placeholder":"ör. slug, seoUrl, canonicalUrl","modalForm.attribute.target-field":"İliştirilmiş alan","modalForm.attributes.select-component":"Bir bileşen seç","modalForm.attributes.select-components":"Bileşenleri seç","modalForm.collectionType.header-create":"Bir koleksiyon tipi oluştur","modalForm.component.header-create":"Bir bileşen oluştur","modalForm.components.create-component.category.label":"Kategori seç ya da yeni bir tane oluşturmak için isim gir","modalForm.components.icon.label":"İkon","modalForm.custom-fields.advanced.settings.extended":"Gelişmiş ayarlar","modalForm.editCategory.base.name.description":"Kategori adında boşluk olamaz","modalForm.empty.button":"Özel alanlar ekle","modalForm.empty.heading":"Burada henüz bir şey yok.","modalForm.empty.sub-heading":"Geniş yelpazedeki uzantılar ile aradığını bul.","modalForm.header-edit":"Düzenle: {name}","modalForm.header.categories":"Kategoriler","modalForm.header.back":"Geri","modalForm.singleType.header-create":"Bir tekil tip oluştur","modalForm.sub-header.addComponentToDynamicZone":"Dinamik bölgeye yeni bileşen ekle","modalForm.sub-header.attribute.create":"Yeni {type} alanı ekle","modalForm.sub-header.attribute.create.step":"Yeni bileşen ekle ({step}/2)","modalForm.sub-header.attribute.edit":"Düzenle: {name}","modalForm.sub-header.chooseAttribute.collectionType":"Koleksiyon tipin için bir alan seç","modalForm.sub-header.chooseAttribute.component":"Bileşenin için bir alan seç","modalForm.sub-header.chooseAttribute.singleType":"Tekil tipin için bir alan seç","modalForm.tabs.custom":"Özel","modalForm.tabs.custom.howToLink":"Nasıl özel alan eklenir","modalForm.tabs.default":"Varsayılan","modalForm.tabs.label":"Varsayılan ve Özel tip sekmeleri","modelPage.attribute.relationWith":"İlişkili","notification.error.dynamiczone-min.validation":"Bir içerik tipini kaydetmek için dinamik bölgede en az bir bileşen olması gereklidir","notification.info.autoreaload-disable":"Bu eklentinin kullanılabilmesi için otomatik yeniden yükleme (autoReload) özelliği gereklidir. Sunucunu `strapi develop` ile başlat","notification.info.creating.notSaved":"Yeni bir koleksiyon tipi ya da bileşen oluşturmadan önce yaptıklarını kaydet","plugin.description.long":"APInin veri yapısını modelle. Sadece bir iki dakikada yeni alanlar ve ilişkiler oluştur. Projendeki dosyalar otomatik olarak oluşturulur ve güncellenir.","plugin.description.short":"APInin veri yapısını modelle.","plugin.name":"İçerik Tipi Kurucusu","popUpForm.navContainer.advanced":"Gelişmiş Ayarlar","popUpForm.navContainer.base":"Temel ayarlar","popUpWarning.bodyMessage.cancel-modifications":"Değişikliklerini iptal etmek istediğinden emin misin?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Değişikliklerini iptal etmek istediğinden emin misin? Bazı bileşenler oluşturuldu ya da değiştirildi.","popUpWarning.bodyMessage.category.delete":"Bu kategoriyi silmek istediğinden emin misin? Tüm bileşenler de silinecek.","popUpWarning.bodyMessage.component.delete":"Bu bileşeni silmek istediğinden emin misin?","popUpWarning.bodyMessage.contentType.delete":"Bu İçerik Türünü silmek istediğinizden emin misiniz?","popUpWarning.draft-publish.button.confirm":"Evet, devredışı bırak","popUpWarning.draft-publish.message":"Taslak/Yayınla sistemini devredışı bırakırsan taslakların silinecek.","popUpWarning.draft-publish.second-message":"Devredışı bırakmak istediğinden emin misin?","prompt.unsaved":"Çıkmak istediğinden emin misin? Tüm değişikliklerin kaybolacak.","relation.attributeName.placeholder":"Örnek: yazar, katagori, etiket","relation.manyToMany":"birçok kişiye ait ve ait","relation.manyToOne":"Birçok var","relation.manyWay":"çok yönlü","relation.oneToMany":"Birçoğuna ait","relation.oneToOne":"biri var","relation.oneWay":"tek yönlü","table.button.no-fields":"Yeni alan ekle","table.content.create-first-content-type":"İlk Koleksiyon-Tipini oluştur","table.content.no-fields.collection-type":"Bu Koleksiyon-Tipine ile alanını ekle","table.content.no-fields.component":"Bu bileşene ilk alanını ekle"}');

/***/ })

}]);