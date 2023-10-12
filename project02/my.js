const movies = [
    { title: "해리포터", director: "J. K. 롤링 ", cast: " 헤르미온느 그레인저, 해리 포터", rating: 9.5, releaseYear: 2016 },
    { title: "아바타", director: "제임스 카메론 ", cast: " 키리", rating: 7.9, releaseYear: 2011 }
    
]

function displayMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // 목록을 초기화합니다.

    // 각 영화 정보를 반복하여 나열합니다.
    movies.forEach((movie, index) => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";

        movieItem.innerHTML = `
            <h2>${index + 1}. <a href="view.html?index=${index}">${movie.title}</a></h2>
            <p>감독: ${movie.director}</p>
            <p>출연진: ${movie.cast}</p>
            <p>평점: ${movie.rating}</p>
            <p>출시년도: ${movie.releaseYear}</p>
        `;

        movieList.appendChild(movieItem);
    });
}


function addMovie() {
    const title = document.getElementById("movieTitle").value;
    const director = document.getElementById("director").value;
    const cast = document.getElementById("cast").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    // 새로운 영화 정보를 배열에 추가
    movies.push({ title, director, cast, rating, releaseYear });

    // 영화 목록 페이지로 이동
    setTimeout(function(){ window.location.href="index.html" }, 100);

    return false; // 폼 제출 방지
}

function viewMovie(index) {
    // view.html로 이동하면서 선택한 영화의 인덱스를 전달
    // 실제 프로젝트에서는 해당 영화의 ID 또는 데이터를 전달해야 합니다.
    window.location.href = `view.html?index=${index}`;
}

function editMovie() {
    const index = parseInt(document.getElementById("movieIndex").value);
    const title = document.getElementById("movieTitle").value;
    const director = document.getElementById("director").value;
    const cast = document.getElementById("cast").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    // 수정된 정보를 업데이트
    movies[index] = { title, director, cast, rating, releaseYear };

    // 영화 목록 페이지로 이동
    window.location.href = "index.html";

    return false;
}

function deleteMovie() {
    if (confirm("영화를 삭제할까요?")) {
        const index = parseInt(getParameterByName("index"));
        
        // 삭제된 영화 정보를 배열에서 제거
        movies.splice(index, 1);
        
        // 영화 목록 페이지로 이동
        window.location.href = "index.html";
    }
}

// 페이지 로드 시 영화 목록을 표시
displayMovies();

// URL에서 쿼리 문자열에서 매개 변수 값을 가져오는 함수
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
