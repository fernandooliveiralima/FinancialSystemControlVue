import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDateFilterStore = defineStore('formatDate', () => {

    const formatedDate = (date: Date): string => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return  `${formatedDayMonth(day)}/${formatedDayMonth(month)}/${year}`;
    }

    const formatedDayMonth = (n: number): string => n < 10 ? `0${n}` : `${n}`;

    return { formatedDate }
});