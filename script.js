/* --- TOÀN BỘ CODE JAVASCRIPT ĐÃ TỐI ƯU CHO DI ĐỘNG --- */

const textElem = document.getElementById('textDisplay');
const fullLyric = "Nếu đêm khuya\nnhiều đắn đo..."; 

// 1. Hiệu ứng đánh chữ lời nhạc (GIỮ NGUYÊN)
function typeLyrics(text, i) {
    if (i < text.length) {
        textElem.style.opacity = 1;
        textElem.innerHTML += (text.charAt(i) === "\n") ? "<br>" : text.charAt(i);
        setTimeout(() => typeLyrics(text, i + 1), 50); 
    } else {
        setTimeout(() => startDayTransition(), 500);
    }
}

// 2. Chuyển cảnh Ngày/Đêm (GIỮ NGUYÊN)
function startDayTransition() {
    document.getElementById('sky').classList.replace('night', 'day');
    document.getElementById('moon').style.opacity = '0';
    document.getElementById('sun').classList.add('rise');
    textElem.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('couple').classList.add('show');
    }, 500); 

    setTimeout(() => {
        const gallery = document.getElementById('gallery');
        document.getElementById('sky').style.display = 'none';
        document.getElementById('mainStage').style.display = 'none';
        gallery.style.display = 'flex'; 
        startGallery();
    }, 2500); 
}

// 3. Khởi động chương trình (TỐI ƯU CHO MOBILE)
document.addEventListener('DOMContentLoaded', () => {
    const music1 = document.getElementById('myMusic');
    const startBtn = document.getElementById('startBtn');
    const overlay = document.getElementById('overlay');

    const startAction = () => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 500);
        
        const sky = document.getElementById('sky');
        const stage = document.getElementById('mainStage');
        const lyricZone = document.querySelector('.lyric-zone');

        // Force hiển thị các thành phần chính
        if(sky) sky.style.setProperty('display', 'block', 'important');
        if(stage) stage.style.setProperty('display', 'flex', 'important');
        if(lyricZone) lyricZone.style.setProperty('display', 'block', 'important');

        if (music1) {
            music1.play().catch(e => console.log("Lỗi nhạc 1:", e));
        }
        
        textElem.innerHTML = ""; 
        typeLyrics(fullLyric, 0);
    };

    startBtn.addEventListener('click', startAction);
});

// 4. Chạy Gallery ảnh (GIỮ NGUYÊN)
function startGallery() {
    const images = document.querySelectorAll('.gallery-img');
    let index = 0;
    const durations = [1700, 2300, 2000, 2000]; 

    function nextImg() {
        images.forEach(img => img.classList.remove('active'));
        if (index < images.length) {
            if(images[index]) images[index].classList.add('active');
            let timeToShow = durations[index] || 2000;
            index++;
            setTimeout(nextImg, timeToShow);
        } else {
            startCurtainTransition();
        }
    }
    nextImg();
}

// 5. HIỆU ỨNG SẬP MÀN (GIỮ NGUYÊN)
function startCurtainTransition() {
    const loader = document.getElementById('fastLoader');
    const loadText = document.getElementById('loadText');
    const music1 = document.getElementById('myMusic'); 
    const texts = ["Loading.", "Loading..", "Loading..."];
    
    loader.classList.add('drop-active'); 

    if (music1) {
        music1.pause();
        music1.currentTime = 0; 
    }

    let count = 0;
    const loadInterval = setInterval(() => {
        loadText.innerText = texts[count % texts.length];
        count++;
        if (count >= 3) { 
            clearInterval(loadInterval);
            loader.style.transform = 'translateY(-100%)'; 
            openTheLetter();
        }
    }, 300); 
}

// 6. MỞ THƯ - FIX LỖI NHẠY TRÊN ĐIỆN THOẠI
function openTheLetter() {
    const wishZone = document.getElementById('wishZone');
    const env = document.getElementById('envelope');
    const music2 = document.getElementById('wishMusic'); 

    wishZone.style.display = 'flex';
    
    setTimeout(() => {
        env.classList.add('fly-in');
    }, 100);

    const handleOpen = () => {
        wishZone.classList.add('terminal-mode');
        if (music2) {
            music2.play().catch(e => console.log("Lỗi nhạc 2:", e));
        }
        env.style.display = 'none';
        const paper = document.getElementById('paper');
        paper.classList.add('paper-open');
        typeFinalWish();
    };

    env.addEventListener('click', handleOpen);
}

// 7. HIỆU ỨNG CHẠY CODE (GIỮ NGUYÊN)
function typeFinalWish() {
    const codeLines = [
        '<span style="color: #2ecc71;">//===== I Miss You =====</span>',
        '<span style="color: #fff;">I = </span><span style="color: #ff79c6;">new</span><span style="color: #fff;"> I(</span><span style="color: #f1fa8c;">"I love u"</span><span style="color: #fff;">);</span>',
        '<span style="color: #fff;">She = </span><span style="color: #ff79c6;">new</span><span style="color: #fff;"> She(</span><span style="color: #f1fa8c;">"Như (ẻm dthw vai)"</span><span style="color: #fff;">);</span>',
        '<span style="color: #2ecc71;">// Lần đầu tiên tớ biết đến cậu</span>',
        '<span style="color: #fff;">i.firstTimeKnowing(u);</span>',
        '<span style="color: #2ecc71;">// Ngày nào tớ cũng tương tư về cậu</span>',
        '<span style="color: #fff;">i.thinkAboutYouEveryDay(u);</span>',
        '<span style="color: #2ecc71;">// Nhớ cậu từng giây từng phút</span>',
        '<span style="color: #fff;">i.missYouEverySecond(u);</span>',
        '<span style="color: #2ecc71;">// Có lẽ là tớ thích cậu nhiều hơn tớ nghĩ</span>',
        '<span style="color: #fff;">i.likeYouMoreThanIThought(u);</span>',
        '<span style="color: #2ecc71;">// Tớ muốn cho cậu biết</span>',
        '<span style="color: #fff;">i.wantYouToKnow(u);</span>',
        '<span style="color: #2ecc71;">// Gặp được cậu là hạnh phúc của tớ</span>',
        '<span style="color: #fff;">i.meetingYouIsMyHappiness(u);</span>'
    ];
    
    const target = document.getElementById('codeDisplay');
    const runBtn = document.getElementById('runBtn');
    const codeContainer = document.getElementById('codeContainer');
    const finalScreen = document.getElementById('finalWishScreen');
    
    async function typeHtmlLine(html) {
        let lineContainer = document.createElement('div');
        target.appendChild(lineContainer);

        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        let nodes = Array.from(tempDiv.childNodes);

        for (let node of nodes) {
            if (node.nodeType === 3) { // Text node
                for (let char of node.textContent) {
                    lineContainer.innerHTML += char === " " ? "&nbsp;" : char;
                    await new Promise(r => setTimeout(r, 45));
                }
            } else { // Span node
                let span = document.createElement('span');
                span.style.cssText = node.style.cssText;
                lineContainer.appendChild(span);
                for (let char of node.textContent) {
                    span.innerHTML += char === " " ? "&nbsp;" : char;
                    await new Promise(r => setTimeout(r, 45));
                }
            }
        }
    }

    async function startTyping() {
        for (let line of codeLines) {
            await typeHtmlLine(line);
            const body = document.querySelector('.terminal-body');
            if (body) {
                body.scrollTop = body.scrollHeight;
                // Fix cho một số trình duyệt di động không cuộn mượt
                body.scroll({ top: body.scrollHeight, behavior: 'smooth' });
            }
        }
        runBtn.style.display = 'block';
    }

    runBtn.onclick = () => {
        codeContainer.style.display = 'none';
        finalScreen.classList.add('result-show');
    };

    startTyping();
}