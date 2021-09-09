import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendContactForm from './components/FriendContactForm.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('friend-contact-form', FriendContactForm);

app.mount('#app');
