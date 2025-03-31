<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

type LocaleCode = 'en' | 'fr' | 'es';

const { locale, setLocale } = useI18n<LocaleCode>();
const isOpen = ref(false);

const languages: { code: LocaleCode; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

const switchLanguage = async (code: LocaleCode) => {
  await setLocale(code); // Type-safe locale switching
  isOpen.value = false;
};

const getCurrentLanguage = () => languages.find(l => l.code === locale.value);
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-50"
    >
      <span>{{ getCurrentLanguage()?.flag }}</span>
      <span>{{ getCurrentLanguage()?.nativeName }}</span>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <button
          v-for="language in languages"
          :key="language.code"
          @click="switchLanguage(language.code)"
          class="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          <span class="mr-3">{{ language.flag }}</span>
          <span class="flex-grow text-left">{{ language.nativeName }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
