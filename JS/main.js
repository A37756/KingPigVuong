const logins = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalCloses = document.querySelectorAll('.js-modal-close')        
const modalContainer = document.querySelector('.js-modal-container')
// Hàm hiển thị (thêm class open vào model)
function showBuyTickets(){
    modal.classList.add('open')
}

// Gỡ bỏ class model đi
function hideBuyTickets(){
    modal.classList.remove('open')
    
}

// Lặp nếu có nhiều thẻ
for(const login of logins) {
    //addEventListener lắng nghe hành vi click khi có người gọi đến nó
    login.addEventListener('click', showBuyTickets)
}

for(const modalClose of modalCloses) {
    modalClose.addEventListener('click',hideBuyTickets)
}

modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation() //dừng nổi bọt để không bị bấm vào
})