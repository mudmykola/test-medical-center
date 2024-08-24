<script setup>
import { ref, computed, onMounted } from "vue";
import { format } from "date-fns";

const LOCAL_STORAGE_KEY = "clients";

const staticTexts = {
  clientsTitle: "Клієнти",
  searchPlaceholder: "Пошук",
  selectCategoryPlaceholder: "Виберіть зі списку",
  selectCategory: "Виберіть категорію",
  addClientTitle: "Додати",
  clientNamePlaceholder: "Ім'я клієнта",
  phonePlaceholder: "Номер телефону (з кодом країни)",
  saveButton: "Зберегти",
  cancelButton: "Скасувати",
  deleteButton: "Видалити",
};

const staticClients = ref([
  {
    name: "Іван Іванов",
    category: "Категорія 1",
    phone: "+380123456789",
    addedAt: new Date().toISOString(),
  },
  {
    name: "Марія Петрова",
    category: "Категорія 2",
    phone: "+380987654321",
    addedAt: new Date().toISOString(),
  },
  {
    name: "Олександр Сидоров",
    category: "Категорія 1",
    phone: "+380555555555",
    addedAt: new Date().toISOString(),
  },
]);

const categories = ["Категорія 1", "Категорія 2"];

const selectedCategory = ref("");

const searchQuery = ref("");

const filteredClients = computed(() => {
  return staticClients.value.filter((client) => {
    const queryLower = searchQuery.value.toLowerCase();
    const matchesSearch =
      client.name.toLowerCase().includes(queryLower) ||
      client.category.toLowerCase().includes(queryLower) ||
      client.phone.toLowerCase().includes(queryLower);
    const matchesCategory =
      selectedCategory.value === "" ||
      client.category.toLowerCase() === selectedCategory.value.toLowerCase();
    return matchesSearch && matchesCategory;
  });
});

const newClient = ref({ name: "", category: "", phone: "" });

const showAddClientForm = ref(false);

const loadClientsFromLocalStorage = () => {
  const clients = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (clients) {
    try {
      staticClients.value = JSON.parse(clients).map((client) => {
        return {
          ...client,
          addedAt: isValidDate(client.addedAt)
            ? client.addedAt
            : new Date().toISOString(),
        };
      });
    } catch (error) {
      console.error("Error parsing clients from Local Storage", error);
      staticClients.value = [];
    }
  }
};

const isValidDate = (dateStr) => {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
};

const saveClientsToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(staticClients.value));
};

const addClient = () => {
  if (
    newClient.value.name &&
    newClient.value.category &&
    validatePhone(newClient.value.phone)
  ) {
    staticClients.value.push({
      ...newClient.value,
      addedAt: new Date().toISOString(),
    });
    saveClientsToLocalStorage();
    newClient.value = { name: "", category: "", phone: "" };
    showAddClientForm.value = false;
  }
};

const removeClient = (index) => {
  staticClients.value.splice(index, 1);
  saveClientsToLocalStorage();
};

const validatePhone = (phone) => {
  const phonePattern = /^\+\d{12,15}$/;
  return phonePattern.test(phone);
};

const updatePhone = (value) => {
  const cleanedValue = value.replace(/[^+\d]/g, "");
  if (cleanedValue.length <= 16) {
    newClient.value.phone = cleanedValue;
  }
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return format(date, "dd/MM/yyyy HH:mm");
};

onMounted(() => {
  loadClientsFromLocalStorage();
});
</script>

<template>
  <div class="clients">
    <div class="clients-function">
      <div class="clients-function__quantity">
        <h2>{{ staticTexts.clientsTitle }}</h2>
        <span>{{ filteredClients.length }} чоловік</span>
      </div>

      <div class="clients-function__search">
        <div class="search-icon">
          р
        </div>
        <input
          type="text"
          v-model="searchQuery"
          :placeholder="staticTexts.searchPlaceholder"
          class="search-input"
        />
      </div>

      <div class="clients-function__category">
        <select v-model="selectedCategory">
          <option value="">{{ staticTexts.selectCategoryPlaceholder }}</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="clients-function__add">
        <button @click="showAddClientForm = true">{{ staticTexts.addClientTitle }} +</button>
      </div>
    </div>

    <div v-if="showAddClientForm" class="add-client-form">
      <h3>{{ staticTexts.addClientTitle }}</h3>
      <input
        type="text"
        v-model="newClient.name"
        :placeholder="staticTexts.clientNamePlaceholder"
        class="input-field"
      />
      <select v-model="newClient.category" class="input-field">
        <option value="">{{ staticTexts.selectCategory }}</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <input
        type="text"
        :value="newClient.phone"
        :placeholder="staticTexts.phonePlaceholder"
        class="input-field"
        maxlength="16"
        @input="updatePhone($event.target.value)"
      />
      <button @click="addClient" class="save-button">{{ staticTexts.saveButton }}</button>
      <button @click="showAddClientForm = false" class="cancel-button">{{ staticTexts.cancelButton }}</button>
    </div>

    <table class="clients-list">
      <thead>
      <tr>
        <th>Ім’я/Нікнейм</th>
        <th>Категорія</th>
        <th>Телефон</th>
        <th>Дата оновлення</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(client, index) in filteredClients" :key="client.phone">
        <td>{{ client.name }}</td>
        <td>{{ client.category }}</td>
        <td>{{ client.phone }}</td>
        <td>{{ formatDate(client.addedAt) }}</td>
        <td>
          <button @click="removeClient(index)" class="delete-button">{{ staticTexts.deleteButton }}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import "clients-style";
</style>
