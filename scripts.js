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
                image: 'images\\Fracture CT to A Drop\\img1.png',
                title: 'Image 2-1',
                desc: 'stand here'
            },
            {
                image: 'images\\Fracture CT to A Drop\\img2.png',
                title: 'Image 2-2',
                desc: 'aim here'
            },
            {
                image: 'images\\Fracture CT to A Drop\\img3.png',
                title: 'Image 2-3',
                desc: '瞄準 滿格蓄力反彈2下'
            },
            {
                image: 'images\\Fracture CT to A Drop\\img4.png',
                title: 'Image 2-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 3',
        images: [
            {
                image: 'images\\Fracture Tower to B main\\img1.png',
                title: 'Image 3-1',
                desc: 'stand here'
            },
            {
                image: 'images\\Fracture Tower to B main\\img2.png',
                title: 'Image 3-2',
                desc: 'aim here'
            },
            {
                image: 'images\\Fracture Tower to B main\\img3.png',
                title: 'Image 3-3',
                desc: ''
            },
            {
                image: 'images\\Fracture Tower to B main\\img4.png',
                title: 'Image 3-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 4',
        images: [
            {
                image: 'images\\Fracture CT to A Drop\\img1.png',
                title: 'Image 4-1',
                desc: 'stand here'
            },
            {
                image: 'images\\Fracture CT to A Drop\\img2.png',
                title: 'Image 4-2',
                desc: 'aim here'
            },
            {
                image: 'images\\Fracture CT to A Drop\\img3.png',
                title: 'Image 4-3',
                desc: ''
            },
            {
                image: 'images\\Fracture CT to A Drop\\img4.png',
                title: 'Image 4-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 5',
        images: [
            {
                image: 'images\\A side to A drop\\img1.png',
                title: 'Image 5-1',
                desc: 'stand here'
            },
            {
                image: 'images\\A side to A drop\\img2.png',
                title: 'Image 5-2',
                desc: 'aim here'
            },
            {
                image: 'images\\A side to A drop\\img3.png',
                title: 'Image 5-3',
                desc: ''
            },
            {
                image: 'images\\A side to A drop\\img4.png',
                title: 'Image 5-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 6',
        images: [
            {
                image: 'images\\B CT to A side\\img1.png',
                title: 'Image 6-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B CT to A side\\img2.png',
                title: 'Image 6-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B CT to A side\\img3.png',
                title: 'Image 6-3',
                desc: ''
            },
            {
                image: 'images\\B CT to A side\\img4.png',
                title: 'Image 6-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 7',
        images: [
            {
                image: 'images\\A CT to B side\\img1.png',
                title: 'Image 7-1',
                desc: 'stand here'
            },
            {
                image: 'images\\A CT to B side\\img2.png',
                title: 'Image 7-2',
                desc: 'aim here'
            },
            {
                image: 'images\\A CT to B side\\img3.png',
                title: 'Image 7-3',
                desc: ''
            },
            {
                image: 'images\\A CT to B side\\img4.png',
                title: 'Image 7-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 8',
        images: [
            {
                image: 'images\\B under tower to B CT\\img1.png',
                title: 'Image 8-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B under tower to B CT\\img2.png',
                title: 'Image 8-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B under tower to B CT\\img3.png',
                title: 'Image 8-3',
                desc: ''
            },
            {
                image: 'images\\B under tower to B CT\\img4.png',
                title: 'Image 8-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 9',
        images: [
            {
                image: 'images\\B side to B main\\img1.png',
                title: 'Image 9-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B side to B main\\img2.png',
                title: 'Image 9-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B side to B main\\img3.png',
                title: 'Image 9-3',
                desc: ''
            },
            {
                image: 'images\\B side to B main\\img4.png',
                title: 'Image 9-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 10',
        images: [
            {
                image: 'images\\B main to A side\\img1.png',
                title: 'Image 10-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B main to A side\\img2.png',
                title: 'Image 10-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B main to A side\\img3.png',
                title: 'Image 10-3',
                desc: ''
            },
            {
                image: 'images\\B main to A side\\img4.png',
                title: 'Image 10-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 11',
        images: [
            {
                image: 'images\\B tower to A drop top\\img1.png',
                title: 'Image 11-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B tower to A drop top\\img2.png',
                title: 'Image 11-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B tower to A drop top\\img3.png',
                title: 'Image 11-3',
                desc: ''
            },
            {
                image: 'images\\B tower to A drop top\\img4.png',
                title: 'Image 11-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 12',
        images: [
            {
                image: 'images\\T (other size) to B side\\img1.png',
                title: 'Image 12-1',
                desc: 'stand here'
            },
            {
                image: 'images\\T (other size) to B side\\img2.png',
                title: 'Image 12-2',
                desc: 'aim here'
            },
            {
                image: 'images\\T (other size) to B side\\img3.png',
                title: 'Image 12-3',
                desc: ''
            },
            {
                image: 'images\\T (other size) to B side\\img4.png',
                title: 'Image 12-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 13',
        images: [
            {
                image: 'images\\B main to under tower hall\\img1.png',
                title: 'Image 13-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B main to under tower hall\\img2.png',
                title: 'Image 13-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B main to under tower hall\\img3.png',
                title: 'Image 13-3',
                desc: ''
            },
            {
                image: 'images\\B main to under tower hall\\img4.png',
                title: 'Image 13-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 14',
        images: [
            {
                image: 'images\\B main to B (other size)\\img1.png',
                title: 'Image 14-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B main to B (other size)\\img2.png',
                title: 'Image 14-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B main to B (other size)\\img3.png',
                title: 'Image 14-3',
                desc: ''
            },
            {
                image: 'images\\B main to B (other size)\\img4.png',
                title: 'Image 14-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 15',
        images: [
            {
                image: 'images\\T (other size) to B  main\\img1.png',
                title: 'Image 15-1',
                desc: 'stand here'
            },
            {
                image: 'images\\T (other size) to B  main\\img2.png',
                title: 'Image 15-2',
                desc: 'aim here'
            },
            {
                image: 'images\\T (other size) to B  main\\img3.png',
                title: 'Image 15-3',
                desc: ''
            },
            {
                image: 'images\\T (other size) to B  main\\img4.png',
                title: 'Image 15-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 16',
        images: [
            {
                image: 'images\\B tower under to A drop under\\img1.png',
                title: 'Image 16-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B tower under to A drop under\\img2.png',
                title: 'Image 16-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B tower under to A drop under\\img3.png',
                title: 'Image 16-3',
                desc: ''
            },
            {
                image: 'images\\B tower under to A drop under\\img4.png',
                title: 'Image 16-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 17',
        images: [
            {
                image: 'images\\B CT to B main (other size)\\img1.png',
                title: 'Image 17-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B CT to B main (other size)\\img2.png',
                title: 'Image 17-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B CT to B main (other size)\\img3.png',
                title: 'Image 17-3',
                desc: ''
            },
            {
                image: 'images\\B CT to B main (other size)\\img4.png',
                title: 'Image 17-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 18',
        images: [
            {
                image: 'images\\B main to A T(other size)\\img1.png',
                title: 'Image 18-1',
                desc: 'stand here'
            },
            {
                image: 'images\\B main to A T(other size)\\img2.png',
                title: 'Image 18-2',
                desc: 'aim here'
            },
            {
                image: 'images\\B main to A T(other size)\\img3.png',
                title: 'Image 18-3',
                desc: ''
            },
            {
                image: 'images\\B main to A T(other size)\\img4.png',
                title: 'Image 18-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 19',
        images: [
            {
                image: 'images\\A drop to A CT\\img1.png',
                title: 'Image 19-1',
                desc: 'stand here'
            },
            {
                image: 'images\\A drop to A CT\\img2.png',
                title: 'Image 19-2',
                desc: 'aim here'
            },
            {
                image: 'images\\A drop to A CT\\img3.png',
                title: 'Image 19-3',
                desc: ''
            },
            {
                image: 'images\\A drop to A CT\\img4.png',
                title: 'Image 19-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 20',
        images: [
            {
                image: 'images\\CT to B main\\img1.png',
                title: 'Image 20-1',
                desc: 'stand here'
            },
            {
                image: 'images\\CT to B main\\img2.png',
                title: 'Image 20-2',
                desc: 'aim here'
            },
            {
                image: 'images\\CT to B main\\img3.png',
                title: 'Image 20-3',
                desc: ''
            },
            {
                image: 'images\\CT to B main\\img4.png',
                title: 'Image 20-4',
                desc: 'result'
            }
        ]
    },
    {
        folderName: 'Folder 21',
        images: [
            {
                image: 'images\\CT to B main\\img1.png',
                title: 'Image 21-1',
                desc: 'stand here'
            },
            {
                image: 'images\\CT to B main\\img2.png',
                title: 'Image 21-2',
                desc: 'aim here'
            },
            {
                image: 'images\\CT to B main\\img3.png',
                title: 'Image 21-3',
                desc: ''
            },
            {
                image: 'images\\CT to B main\\img4.png',
                title: 'Image 21-4',
                desc: 'result'
            }
        ]
    },
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
