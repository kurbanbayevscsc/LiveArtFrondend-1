document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("generateForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const prompt = document.getElementById("prompt").value.trim();
    if (!prompt) {
      alert("Iltimos, prompt kiriting!");
      return;
    }

    result.innerHTML = "<p>⏳ Yaratilmoqda...</p>";

    try {
      // Hozircha demo javobi, keyinchalik backend API ulanadi
      setTimeout(() => {
        result.innerHTML = <video controls width="100%">
            <source src="demo-video.mp4" type="video/mp4">
            Sizning videongiz shu yerda paydo bo‘ladi.
          </video>;
      }, 2000);
    } catch (error) {
      result.innerHTML = <p style="color:red;">Xatolik: ${error.message}</p>;
    }
  });
});
