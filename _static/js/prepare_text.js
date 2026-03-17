const folder_path = "/_static/translation/"

const lang_path = {
    "en": "en/english.json",
    "th": "th/thai.json",
}

function get_lang_path(lang) {
    const real_path = folder_path + lang_path[lang]
    return real_path
}

async function fetch_data(lang) {
    const response = await fetch(get_lang_path(lang))
    const data = await response.json()

    return data
}

export async function get_translations() {
    const eng_data = await fetch_data("en")
    const thai_data = await fetch_data("th")

    const languages_dict = {
        "en": eng_data,
        "th": thai_data,
    }

    return languages_dict
}