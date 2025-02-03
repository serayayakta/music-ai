import { ToggleComponent } from "../components/toggle.js";

export function SettingsPage() {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
        <h1>Ayarlar</h1>
        <div class="card"><img src="public/icons/avatar.svg" alt="Avatar"> Lorem Ipsum</div>
        <div class="card">Abonelikler <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
        <div class="card">Kayıtlı Kartlarım <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
        <div class="card">Bildirimler</div>
        <div class="card">Dil English <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
        <div class="card">Destek <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
        <div class="card">Gizlilik Politikası <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
        <div class="card">Bizi Değerlendirin <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
        <div class="card" style="color: red;">Çıkış Yap <span><img src="public/icons/arrow.svg" class="arrow" alt=""></span></div>
    `;
    
    const toggleWrapper = container.querySelector(".card:nth-child(4)");
    toggleWrapper.appendChild(ToggleComponent());
    
    return container.outerHTML;
}
