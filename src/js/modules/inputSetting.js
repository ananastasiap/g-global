export const inputSetting = (selectorsearchInput) => {
  const searchInput = document.getElementById(selectorsearchInput);

  searchInput.addEventListener("input", function () {
    const sanitizedValue = this.value.replace(/[!@#$%^&*(),]/g, "");

    if (this.value !== sanitizedValue) {
      alert("Please, do not use !@#$%^&*()");
    }

    this.value = sanitizedValue;
  });
};
