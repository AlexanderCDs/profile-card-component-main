/** 
* @author: Alexander Chi
* @description:
* @date: 01/Septiembre/2021
**/ 
export function CardProfile(props) {
    const { 
        pattern, 
        photo, 
        name, 
        years, 
        city, 
        followers, 
        likes, 
        photos 
    } = props;
    return (
      <div className="card">
        <div className="card__pattern"> 
            <img alt={`Pattern`} src={pattern}></img>
        </div>
        <div className="card__photo"> 
            <img alt={name} src={photo}></img>
        </div>
        <div className="card__content"> 
            <h3 className="name">
                {name} <span className="years">{years}</span>
            </h3>
            <p className="city">
                {city}
            </p>
        </div>
        <div className="card__line"></div>
        <div className="card__footer"> 
            <Item 
                number={followers}
                text={`Followers`}/>
            <Item 
                number={likes}
                text={`Likes`}/>
            <Item 
                number={photos}
                text={`Photos`}/>
        </div>
      </div>
    );
  }
  
  export function Item(props) {
      const {number, text} = props
      return (
          <div className="card__item">
              <span className="number">{number}</span>
              <span className="text">{text}</span>
          </div>
      )
  }
  export default CardProfile;