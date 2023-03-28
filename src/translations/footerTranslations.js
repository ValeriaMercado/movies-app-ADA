
export const footerTranslations = (par) =>{
   
    if (par.language === 'en'){ return{
    createdBy:"Created by Macarena & Valeria. All rights reserved.",
}}

if (par.language === 'es'){
   return {
    createdBy:"Creado por Macarena & Valeria. Todos los derechos reservados."
    }
}

if (par.language === 'fr'){
  return{
    createdBy:"Créé par Macarena & Valeria. Tous les droits sont réservés."
    }
}
if (par.language === 'it'){
  return{
    createdBy:"Creato da Macarena & Valeria. Tutti i diritti riservati."
    }
}
if (par.language === 'ru'){
  return {
   createdBy:"Создано Макареной и Валерией. Все права защищены."
   }
}
if (par.language === 'zh'){
  return {
   createdBy:"由 Macarena 和 Valeria 創建。 版權所有。"
   }
}

}