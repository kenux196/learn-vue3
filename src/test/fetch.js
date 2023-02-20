import { isRef, ref, unref, watchEffect } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((json) => (data.value = json))
  //   .catch((err) => (error.value = err));

  async function doFetch() {
    data.value = null;
    error.value = null;

    const urlValue = unref(url);

    try {
      await timeout();
      const res = await fetch(urlValue);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return { data, error, retry: doFetch };
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve();
      } else {
        reject(new Error('무작위 에러'));
      }
    }, 300);
  });
}
