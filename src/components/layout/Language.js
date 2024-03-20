import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

const Language = () => {
    const { i18n } = useTranslation();
    const [selected, setSelected] = useState("US");
    useEffect(() => {
        i18n.changeLanguage(selected.toLowerCase());
    }, [selected, i18n])
    return (
        <ReactFlagsSelect
            selected={selected}
            onSelect={data => setSelected(data)}
            countries={["US", "FR", "DE", "ES", "MY", "NL", "ID", "TH", "CN", "JP"]}
            customLabels={
                {
                    US: "English",
                    FR: "French",
                    DE: "German",
                    ES: "Spanish",
                    MY: "Malay",
                    NL: "Dutch",
                    ID: "Indonesian",
                    TH: "Thai",
                    CN: "Chinese",
                    JP: "Japanese"
                }}
            placeholder="Select Language"
        />
    )
}

export default Language