import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        this.setState({movies: movies, isLoading: false})
    }

    componentDidMount() {
        // setTimeout(() => {this.setState({isLoading: false})}, 6000);
        this.getMovies();
    }

    render() { 
        const { isLoading, movies } = this.state;
        return (
            <section className='container'>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Загрузка...</span>
                    </div>
                ) : (
                    <div className='movies'>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}
 
export default App;




// Работа с состояниями
// class App extends React.Component {
//     state = {
//         count: 0
//     }

//     // функция 'setState' позволяет не только обновить состояние, но также вызывает функцию 'render', чтобы отобразить эти изменения
//     add = () => {
//         // this.setState({count: this.state.count +1});
//         // или ('current' - текущее состояние)
//         this.setState(current => ({count: current.count +1}));
//     }

//     minus = () => {
//         // this.setState({count: this.state.count -1});
//         // или ('current' - текущее состояние)
//         this.setState(current => ({count: current.count -1}));
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Текущее число: {this.state.count}</h1>
//                 {/* если прописать add() или minus(), то функция сработает сразу при загрузки страницы, а без скобок функция будет выполняться при клике на элемент 'button' */}
//                 <button onClick={this.add}>Плюс</button> 
//                 <button onClick={this.minus}>Минус</button>
//             </div>
//         )
//     }
// }

// export default App;


// Передача props
// function Food({mealName, mealImage, mealRating}) {
//     return (
//         <div>
//             <h3>Мы любим {mealName}!</h3>
//             <h4>{mealRating} / 5.0</h4>
//             <img src={mealImage} alt="#" />
//         </div>
//     )
// };

// // Пакет "PropTypes" используется для проверки корректности типа данных, передаваемых в компонент (строка, число и т.д.), а также контролировать корректность имён передаваемых пропсов ("props")
// // "isRequired" не обязателен
// Food.propTypes = {
//     mealName: PropTypes.string.isRequired,
//     mealImage: PropTypes.string.isRequired,
//     mealRating: PropTypes.number.isRequired,
// }

// const foodWeLike = [
//     {
//         'id': 1,
//         'name': 'борщ',
//         'image': 'https://cstrigon.net/files/avatars/1689330009.jpg',
//         'rating': 4.8
//     },
//     {
//         'id': 2,
//         'name': 'мороженое',
//         'image': 'https://shdvorik32.ru/wp-content/uploads/2020/10/76Mk7za-300x300.jpg',
//         'rating': 4.5
//     },
//     {
//         'id': 3,
//         'name': 'котлеты',
//         'image': 'https://cdn.100sp.ru/cache_pictures/453171658/thumb300',
//         'rating': 5.0
//     },
//     {
//         'id': 4,
//         'name': 'спагетти',
//         'image': 'https://i.pinimg.com/originals/fe/4c/21/fe4c21b078655f0b2ad5e2b7929559da.jpg',
//         'rating': 3.2
//     },
// ]

// // МЕТОД 2
// function renderFood(meal) {
//     return <Food 
//                 key={meal.id}
//                 mealName={meal.name}
//                 mealImage={meal.image}
//                 mealRating={meal.rating}
//             />
// }

// function App() {
//     // МЕТОД 1
//     // return (
//     //     <div>
//     //         {foodWeLike.map(meal => 
//     //             <Food 
//     //                 mealName={meal.name}
//     //                 mealImage={meal.image}
//     //             />
//     //         )}
//     //     </div>
//     // );

//     // МЕТОД 2
//     return (
//         <div>
//             {/* {console.log(foodWeLike.map(renderFood))} */}
//             {foodWeLike.map(renderFood)}
//         </div>
//     );
// };