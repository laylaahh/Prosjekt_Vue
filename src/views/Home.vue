<template>
	<Todo :title="MyVue_app" />
	<ContactForm/>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

	export default {
		components: {
			ContactForm,
			
		},
	};
</script>