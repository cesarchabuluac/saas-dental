import axios from "axios";

export default class ImportFiles {
    
    /**
     * Function to download template
     */
    donwload(query) {
        return axios.get("/api/imports/donwload", {
            responseType: "arraybuffer",
            params: query,
        });
    }

    importCatalog(payload) {
        return axios.post("/api/imports/import-catalog", payload);
    }    
}
