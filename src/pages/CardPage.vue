<template>
  <div class="text-h3 text-center">카드 만들기</div>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember"></q-btn>
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m" class="col-6 col-md-4">
      <member-card :data="m" @upsert="upsert" @remove="remove"></member-card>
    </div>
  </div>
  <div class="bg-grey q-mt-md">
    <p><b>Member Data</b></p>
    <p>
      {{ members }}
    </p>
  </div>
</template>

<script setup>
import { uid, useQuasar } from 'quasar';
import { reactive, defineAsyncComponent } from 'vue';

const MemberCard = defineAsyncComponent(() => import('../components/MemberCard.vue'));

const $q = useQuasar();
const members = reactive($q.sessionStorage.getItem('members') || []);

const addMember = () => {
  members.unshift({
    mid: uid(),
    name: '',
    team: '',
    contact: '',
  });
};

const update = (mid, key, val) => {
  const findMember = getMember(mid);
  if (findMember) {
    findMember[key] = val;
  }
};

const store = (mid) => {
  const tempMembers = $q.sessionStorage.getItem('members') || [];
  const findMember = getMember(mid);
  const findTempMember = tempMembers.find((m) => m.mid === mid);

  if (findMember) {
    findMember.editable = false;

    if (findTempMember) {
      findTempMember.name = findMember.name;
      findTempMember.team = findMember.team;
      findTempMember.contact = findMember.concat;
    } else {
      tempMembers.unshift(findMember);
    }

    $q.sessionStorage.set('members', tempMembers);
  }
};

function getMember(mid) {
  return members.find((m) => m.mid === mid);
}

const upsert = (data, done) => {
  const findMember = members.find((m) => m.mid === data.mid);
  const storageMembers = $q.sessionStorage.getItem('members') || [];
  const findStorageMember = storageMembers.find((m) => m.mid === data.mid);

  if (findMember) {
    findMember.name = data.name;
    findMember.team = data.team;
    findMember.contact = data.contact;

    if (findStorageMember) {
      findStorageMember.name = data.name;
      findStorageMember.team = data.team;
      findStorageMember.contact = data.contact;
    } else {
      storageMembers.unshift(findMember);
    }
  }
  $q.sessionStorage.set('members', storageMembers);

  done();
};

const remove = (mid) => {
  const findIndex = members.findIndex((m) => m.mid === mid);
  const storageMembers = $q.sessionStorage.getItem('members') || [];
  const findStorageIndex = storageMembers.findIndex((m) => m.mid === mid);

  if (findIndex !== -1) {
    members.splice(findIndex, 1);

    if (findStorageIndex !== -1) {
      storageMembers.splice(findStorageIndex, 1);
    }
  }

  $q.sessionStorage.set('members', storageMembers);
};
</script>

<style lang="scss" scoped></style>
