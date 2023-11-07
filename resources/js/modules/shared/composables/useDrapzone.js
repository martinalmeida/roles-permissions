import { ref } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useDrapzone() {
    const shared = useSharedStore();

    const fileInputRef = ref(null);
    const hasFile = ref(false);
    const selectedFileName = ref("");
    const file = ref(null);

    const handleFileChange = async (event) => {
        file.value = await event.target.files[0];
        await shared.setFile(file.value);
        hasFile.value = fileInputRef.value.files.length > 0;

        if (hasFile.value) {
            selectedFileName.value = fileInputRef.value.files[0].name;
        } else {
            selectedFileName.value = "";
        }
    };

    const clearFile = () => {
        hasFile.value = false;
        selectedFileName.value = "";
        fileInputRef.value.value = "";
    };
    // Devolver las referencias reactivas como resultado del composable
    return { fileInputRef, handleFileChange, hasFile, selectedFileName, clearFile };
}