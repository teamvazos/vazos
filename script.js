function switchTab(tabId) {
    // 1. İçerikleri Gizle
    document.querySelectorAll('.tab-pane').forEach(el => {
        el.classList.remove('active');
    });

    // 2. Butonları Pasif Yap
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. İstenen İçeriği ve Butonu Aktif Yap
    document.getElementById(tabId).classList.add('active');
    
    // Hangi butona tıklandıysa onu active yap (onclick üzerinden yakalama)
    const activeBtn = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

// Klavye ile erişim (Opsiyonel, kullanıcı dostu olması için)
document.addEventListener('keydown', (e) => {
    if (e.key === '1') switchTab('team');
    if (e.key === '2') switchTab('social');
    if (e.key === '3') switchTab('more');
});