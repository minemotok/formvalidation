const button = document.getElementById('serch');  // 郵便番号で検索するボタン取得
button.addEventListener('click', (e) => {
  e.preventDefault();
  const postNumber = document.getElementById('post').value;  // テキストボックス（郵便番号）取得
  const option = document.querySelectorAll('option');  // オプション要素（都道府県）取得
  const residenceValue = document.getElementById('residence');  // テキストボックス（住所）取得

  fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + postNumber)
    .then(respons => {
      return respons.json();
    })
    .then(data => {
      const dataOption = data.results[0].address1;
      for (let i = 0; i < option.length; i++) {
        if (option[i].value == dataOption) {
          option[i].selected = true;
        }
      }
      residenceValue.value = data.results[0].address2 + data.results[0].address3;
    })
    .catch(error => {
      console.log(error);
    })

})

// フォーム検証
$(function () {
  $('input[name="jobCategory"]').on('click', function () {
    const jobCategory = $(this).val();
    if (jobCategory == '個人') {
      $('#company').prop('disabled', true);
    } else {
      $('#company').prop('disabled', false);
    }
  });
});
