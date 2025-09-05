import React from 'react'
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation(); //  استدعاء الترجمة

  return (
    <div>{t("nav.contact")}</div>
  )
}

export default Contact