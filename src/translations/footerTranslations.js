
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
}