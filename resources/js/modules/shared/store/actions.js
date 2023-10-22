import { defineStore } from "pinia";
import { useState } from "./state";
import { dataSesion, getModules, getSubModules } from "@s/services";

export const useActions = defineStore("shared.actions", () => {
    const state = useState();

    const setIsLoading = (isLoading) => {
        state.isLoading = isLoading;
    }

    const setAlert = (active, title, close, type, message) => {
        state.alert.active = active;
        state.alert.title = title;
        state.alert.close = close;
        state.alert.type = type;
        state.alert.message = message;
    }

    const closeAlert = () => {
        state.alert.active = false;
        state.alert.title = "";
        state.alert.close = "";
        state.alert.type = "";
        state.alert.message = "";
    }

    const openModal = () => {
        state.modal.active = true;
    }

    const closeModal = () => {
        state.modal.active = false;
    }

    const setUser = async () => {
        const response = await dataSesion();
        state.user.name = response.data.name;
        state.user.aPaterno = response.data.a_paterno;
        state.user.aMaterno = response.data.a_materno;
        state.user.telefono = response.data.telefono;
        state.user.nombrefiscal = response.data.nombrefiscal;
        state.user.direccionfiscal = response.data.direccionfiscal;
        state.user.email = response.data.email;
        state.user.status = response.data.status;
        state.user.rolId = response.data.rol_id;
        state.user.nit = response.data.nit;
        return response;
    }

    const setSeletedModule = (id) => {
        state.modules.forEach((module) => {
            if (module.id === id) {
                module.selected = true;
            } else {
                module.selected = false;
            }
        });
    }

    const setSeletedSubModule = (id) => {
        const moduleSelected = state.modules.find((module) => module.selected === true);
        moduleSelected.subModules.forEach((module) => {
            if (module.id === id) {
                module.selected = true;
            } else {
                module.selected = false;
            }
        });
    }

    const setGetModules = async () => {
        const modules = await getModules();
        const subModules = await getSubModules();
        // Organizar los módulos en un objeto temporal usando un mapa
        const moduleMap = new Map(modules.data.map(module => [module.id, { ...module, subModules: [] }]));
        // Asignar los submódulos a sus respectivos módulos principales
        subModules.data.forEach(subModule => {
            const parentModule = moduleMap.get(subModule.module_id);
            if (parentModule) {
                parentModule.subModules.push(subModule);
            }
        });
        // Convertir el mapa de módulos de nuevo en un arreglo
        const organizedModules = Array.from(moduleMap.values());
        // Actualizar el estado con los módulos organizados
        state.modules = organizedModules;
    }

    return {
        setIsLoading,
        setAlert,
        closeAlert,
        openModal,
        closeModal,
        setUser,
        setSeletedModule,
        setSeletedSubModule,
        setGetModules,
    };
});