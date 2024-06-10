<template>
  <q-card class="overflow-hidden">
    <q-inner-loading :showing="loading" style="z-index: 1">
      <q-spinner size="50px" color="primary" />
    </q-inner-loading>
    <div class="q-pa-sm bg-primary">
      <div class="row justify-between">
        <div class="row items-center q-gutter-x-xs">
          <q-btn v-if="editable" dense flat round size="sm" color="negative" icon="playlist_remove" @click="remove" />
          <div class="text-center text-white">멤버</div>
        </div>
        <div>
          <q-btn
            v-if="!editable"
            unelevated
            dense
            round
            flat
            size="sm"
            color="white"
            icon="edit"
            @click="editable = true"
          />
          <template v-else>
            <q-btn unelevated dense round flat size="sm" color="white" icon="close" @click="cancel" />
            <q-btn unelevated dense round size="sm" color="positive" icon="check" @click="upsert" />
          </template>
        </div>
      </div>
    </div>
    <q-card-section>
      <q-input v-model="name" :readonly="!editable" dense :borderless="!editable" />
      <q-input v-model="team" :readonly="!editable" dense :borderless="!editable" />
      <q-input v-model="contact" :readonly="!editable" dense :borderless="!editable" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(['upsert', 'remove']);

const name = ref(props.data.name);
const team = ref(props.data.team);
const contact = ref(props.data.contact);
const loading = ref(false);
const editable = ref(false);

const done = () => {
  loading.value = false;
  editable.value = false;
};

const remove = () => {
  $q.notify({
    progress: true,
    message: '해당 멤버 카드를 삭제할까요?',
    color: 'indigo-5',
    multiLine: true,
    actions: [
      {
        label: '확인',
        color: 'negative',
        handler: () => {
          loading.value = false;
          emit('remove', props.data.mid);
        },
      },
      { label: '취소', color: 'white' },
    ],
  });
};

const cancel = () => {
  name.value = props.data.name;
  team.value = props.data.team;
  contact.value = props.data.contact;
  editable.value = false;
};

const upsert = () => {
  loading.value = true;

  setTimeout(() => {
    emit(
      'upsert',
      {
        mid: props.data.mid,
        name: name.value,
        team: team.value,
        contact: contact.value,
      },
      done
    );
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
