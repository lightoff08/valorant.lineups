// 資料結構：多個資料夾 (folders)，每個資料夾包含多張圖片
const folderData = [
    {
        folderName: 'Fracture A-main door',
        images: [
            {
                image: 'images/Fracture A-main door\\img1.png',
                title: 'Image 1-1',
                desc: 'stand here。'
            },
            {
                image: 'images/Fracture A-main door\\img2.png',
                title: 'Image 1-2',
                desc: 'aim here。'
            },
            {
                image: 'images/Fracture A-main door\\img3.png',
                title: 'Image 1-3',
                desc: '瞄準開關門中邊框拐角處 滿格蓄力反彈2下'
            },
            {
                image: 'images/Fracture A-main door\\img4.png',
                title: 'Image 1-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 2',
        images: [
            {
                image: 'images\\Dracture CT to A Drop\\img1.png',
                title: 'Image 2-1',
                desc: 'stand here'
            },
            {
                image: 'images\\Dracture CT to A Drop\\img2.png',
                title: 'Image 2-2',
                desc: 'sim here'
            },
            {
                image: 'images\\Dracture CT to A Drop\\img3.png',
                title: 'Image 1-3',
                desc: '瞄準 滿格蓄力反彈2下'
            },
            {
                image: 'images\\Dracture CT to A Drop\\img4.png',
                title: 'Image 1-4',
                desc: 'result'
            }
        ]
    }
    // 如果有更多資料夾，可在此繼續添加
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('detail-modal');
    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // 用來存當前打開的「資料夾索引」以及「資料夾內圖片索引」
    let currentFolderIndex = 0;
    let currentImageIndex = 0;

    // 綁定資料夾卡片的點擊事件
    const folderCards = document.querySelectorAll('.folder-card');
    folderCards.forEach((card) => {
        card.addEventListener('click', () => {
            // 取得此資料夾的索引 (data-folder)
            const folderIndex = parseInt(card.getAttribute('data-folder'), 10);
            openModal(folderIndex, 0); // 一開始從該資料夾的第0張圖片開始
        });
    });

    // 打開Modal並顯示對應資料夾內的圖片
    function openModal(folderIndex, imageIndex) {
        currentFolderIndex = folderIndex;
        currentImageIndex = imageIndex;
        updateModalContent();
        modal.classList.add('show');
    }

    // 關閉Modal
    function closeModal() {
        modal.classList.remove('show');
    }

    // 更新Modal顯示的圖片與文字
    function updateModalContent() {
        const folder = folderData[currentFolderIndex];
        const imgData = folder.images[currentImageIndex];
        detailImage.src = imgData.image;
        detailTitle.textContent = imgData.title;
        detailDesc.textContent = imgData.desc;
    }

    // 顯示前一張圖片
    function showPrev() {
        const folder = folderData[currentFolderIndex];
        currentImageIndex = (currentImageIndex - 1 + folder.images.length) % folder.images.length;
        updateModalContent();
    }

    // 顯示下一張圖片
    function showNext() {
        const folder = folderData[currentFolderIndex];
        currentImageIndex = (currentImageIndex + 1) % folder.images.length;
        updateModalContent();
    }

    // 綁定關閉按鈕
    closeBtn.addEventListener('click', closeModal);

    // 綁定左右箭頭
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // 點擊Modal背景 (非內容區) 時關閉
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
