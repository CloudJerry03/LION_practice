let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
let ps = new kakao.maps.services.Places();  //장소 검색

// 마스크 검색 url
let base_mask_url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?";

//버튼 Enter동작
let search_btn = document.querySelector(".search-btn");
let search_bar = document.querySelector("#search-bar");
console.log(search_bar);
console.log(search_btn);//무슨 의미?

search_btn.addEventListener("click", () => {
    let keyword = search_bar.value;
    if(keyword){
        console.log(keyword + " 을(를) 검색하셨습니다.");
        keywordSearch(keyword);
    } else{
        alert("검색어를 입력해주세요.");
    }
});

search_bar.addEventListener("keyup", () => {
    if(event.keyCode === 13) {
        search_btn.click();
    }
});

function keywordSearch(keyword){
    ps.keywordSearch(keyword, keywordSearchCollback)
}

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function keywordSearchCollback (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        let center = (new kakao.maps.LatLng(data[0].y, data[0].x));
        map.setCenter(center);
        let maskData = getMaskData(data[0].y, data[0].x);
    } 
}

async function getMaskData(lat, lng){
    let request_url = `${base_mask_url}lat=${lat}&lng=${lng}`;
    let response = await fetch(request_url);
    let result = await response.json();
    console.log(result.stores);
    return result.stores;
}