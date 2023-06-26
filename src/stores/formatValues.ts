import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFormatValuesStore = defineStore('formatValues', ()=>{
    
    const formatValues = (value: number) => {
     return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
       
    };
    
    return { formatValues }
});