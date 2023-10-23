"use strict";
(self["webpackChunkstrapi"] = self["webpackChunkstrapi"] || []).push([[2657],{

/***/ 83515:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"Boolean","attribute.boolean.description":"Yes/no, 1/0, true/false","attribute.component":"Komponent","attribute.component.description":"Skupina polí, které je možné opakovaně používat","attribute.date":"Datum a čas","attribute.date.description":"Dialog pro výběr datumu a času","attribute.datetime":"Datum a čas","attribute.dynamiczone":"Dynamická zóna","attribute.dynamiczone.description":"Umožňuje dynamicky zvolit komponenty při úpravách obsahu","attribute.email":"E-mailová adresa","attribute.email.description":"Pole s automatickou validací formátu e-mailové adresy","attribute.enumeration":"Výčet","attribute.enumeration.description":"Seznam hodnot s výběrem jedné možnosti","attribute.json":"JSON","attribute.json.description":"Data vo formátu JSON","attribute.media":"Soubory","attribute.media.description":"Např. obrázky, videa, ...","attribute.null":" ","attribute.number":"Číslo","attribute.number.description":"Čísla (celé, desetinné)","attribute.password":"Heslo","attribute.password.description":"Políčko pro zadání hesla","attribute.relation":"Relace","attribute.relation.description":"Určuje vztah k jinému Typu obsahu","attribute.richtext":"Textový editor","attribute.richtext.description":"Textové pole s možnostmi formátování","attribute.text":"Text","attribute.text.description":"Krátký nebo delší text","attribute.time":"Čas","attribute.uid":"UID","attribute.uid.description":"Unikátní identifikátor","button.attributes.add.another":"Přidat další pole","button.component.add":"Přidat komponent","button.component.create":"Vytvorit nový komponent","button.model.create":"Vytvořit nový Typ obsahu","component.repeatable":"(opakující)","components.componentSelect.no-component-available":"Už jste přidali všechny komponenty","components.componentSelect.no-component-available.with-search":"Nenašel se žádný komponent splňující výraz","components.componentSelect.value-component":"Označené komponenty: {number} (zadejte hledaný text)","components.componentSelect.value-components":"Označené komponenty: {number}","configurations":"nastavení","contentType.collectionName.label":"Interní název","contentType.displayName.label":"Název","error.contentTypeName.reserved-name":"Tento název je vyhrazený a nemůže být použit","error.validation.minSupMax":"Nemůže být nadřazený","form.attribute.component.option.add":"Přidat komponent","form.attribute.component.option.create":"Vytvořit nový komponent","form.attribute.component.option.create.description":"Komponent je dostupný mezi všemi typy a komponenty.","form.attribute.component.option.repeatable":"Znovu použitelný komponent","form.attribute.component.option.repeatable.description":"Nejlepší pro několikanásobné instance (pole) hodnot, meta tagy, apod...","form.attribute.component.option.reuse-existing":"Použít existující komponent","form.attribute.component.option.reuse-existing.description":"Používejte už vytvořené komponenty pro uchování konzistentních dat mezi Typy obsahu.","form.attribute.component.option.single":"Jednoduchý komponent","form.attribute.component.option.single.description":"Vhodné pro seskupení políček, např. celá adresa","form.attribute.item.customColumnName":"Vlastné názvy stĺpcov","form.attribute.item.customColumnName.description":"Umožňuje přejmenovat databázový sloupec pro potřeby API","form.attribute.item.defineRelation.fieldName":"Název pole","form.attribute.item.enumeration.graphql":"Název pole pro GraphQL","form.attribute.item.enumeration.graphql.description":"Umožňuje přepsat přednastavené názvy názvy pro GraphQL","form.attribute.item.enumeration.placeholder":"Např.:\\nráno\\nden\\nvečer","form.attribute.item.enumeration.rules":"Hodnoty (jedna na řádek)","form.attribute.item.maximum":"Maximální hodnota","form.attribute.item.maximumLength":"Maximální délka","form.attribute.item.minimum":"Minimální hodnota","form.attribute.item.minimumLength":"Minimální délka","form.attribute.item.number.type":"Číselný formát","form.attribute.item.number.type.biginteger":"velké číslo (např.: 123456789)","form.attribute.item.number.type.decimal":"desetinné číslo (např.: 2.22)","form.attribute.item.number.type.float":"desetinné číslo (např.: 3.33333333)","form.attribute.item.number.type.integer":"celé číslo (např.: 10)","form.attribute.item.privateField":"Skryté pole","form.attribute.item.privateField.description":"Toto pole se nebude zobrazovat v API","form.attribute.item.requiredField":"Povinné pole","form.attribute.item.requiredField.description":"Nedovolí vytvořit záznam když toto pole zůstane prázdne","form.attribute.item.uniqueField":"Unikátní pole","form.attribute.item.uniqueField.description":"Nedovolí vytvořit záznam když už existuje jiný záznam se stejnou hodnotou","form.attribute.media.option.multiple":"Více souborů","form.attribute.media.option.multiple.description":"Vhodné pro galerii, seznam souborů na stáhnutí","form.attribute.media.option.single":"Jeden soubor","form.attribute.media.option.single.description":"Vhodné pro profilovou fotku nebo hlavní obrázek","form.attribute.settings.default":"Předvolená hodnota","form.attribute.text.option.long-text":"Dlouhý text","form.attribute.text.option.long-text.description":"Vhodné pro delší popisy. Přesné vyhledávání je vypnuté.","form.attribute.text.option.short-text":"Krátky text","form.attribute.text.option.short-text.description":"Vhodné pro nadpisy, názvy, URL adresy. Přesné vyhledávání je zapnuté.","form.button.add-components-to-dynamiczone":"Přidat komponenty do zóny","form.button.add-field":"Přidat další pole","form.button.add-first-field-to-created-component":"Přidat první pole do komponentu","form.button.add.field.to.component":"Přidat další pole do komponentu","form.button.cancel":"Zrušit","form.button.configure-component":"Nastavit komponent","form.button.configure-view":"Upravit vzhled","form.button.select-component":"Vybrat komponent","from":"od","modalForm.attribute.form.base.name.description":"Mezery v názvu pole nejsou povoleny","modalForm.attributes.select-component":"Vyberte komponent","modalForm.attributes.select-components":"Vyberte komponenty","modalForm.component.header-create":"Vytvorte komponent","modalForm.components.create-component.category.label":"Vyberte kategorii nebo zadejte název pro vytvoření nové","modalForm.components.icon.label":"Ikona","modalForm.editCategory.base.name.description":"Mezery v názvu kategorie nejsou povoleny","modalForm.header-edit":"Upravit {name}","modalForm.header.categories":"Kategorie","modalForm.header.back":"Zadní","modalForm.sub-header.addComponentToDynamicZone":"Přidat nový komponent do dynamické zóny","modalForm.sub-header.attribute.create":"Přidat nové pole {type}","modalForm.sub-header.attribute.create.step":"Přidat nový komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Upravit {name}","modalForm.sub-header.chooseAttribute.collectionType":"Vyberte typ pole pro Typ obsahu","modalForm.sub-header.chooseAttribute.component":"Vyberte typ pole pro komponent","modelPage.attribute.relationWith":"Propojení s","notification.info.creating.notSaved":"Uložte změny před vytvořením nového Typu obsahu nebo komponentu","plugin.description.long":"Navrhněte strukturu webu jednoduše. Vytvořte nová pole a propojení během pár sekund. Soubory se automaticky vytvoří a upraví v rámci projektu.","plugin.description.short":"Navrhněte strukturu webu jednoduše.","popUpForm.navContainer.advanced":"Pokročilá nastavení","popUpForm.navContainer.base":"Základní nastavení","popUpWarning.bodyMessage.cancel-modifications":"Jste si jisti, že chcete zrušit úpravy?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Jste si jisti, že chcete zrušit úpravy? Některé komponenty byly vytvořeny nebo upraveny...","popUpWarning.bodyMessage.category.delete":"Jste si jisti, že chcete odstranit tuto kategorii? Všechny komponentu budou rovněž odstraněny.","popUpWarning.bodyMessage.component.delete":"Jste si jisti, že chcete odstranit tento komponent?","popUpWarning.bodyMessage.contentType.delete":"Jste si jisti, že chcete odstranit tento Typ obsahu?","prompt.unsaved":"Jste si jisti, že chcete odejít? Všechny úpravy budou ztraceny.","relation.attributeName.placeholder":"Např: autor, kategorie, tag","relation.manyToMany":"má víc a patří všem","relation.manyToOne":"má víc","relation.manyWay":"má víc","relation.oneToMany":"patří více","relation.oneToOne":"má jeden a patří jednomu","relation.oneWay":"má jeden"}');

/***/ })

}]);