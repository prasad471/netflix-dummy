import React, { Component, Fragment } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledFooter from "./StyledFooter";
import StyledLargeBtn from "./StyledLargeBtn";
import StyledHeaderTitle from "./StyledHeaderTitle";
import StyledHorizontalScroll from "./StyledHorizontalScroll";
import StyledLoader from "./StyledLoader";
import Movie from "./Movie";
import HelpMenuContainer from "../containers/HelpMenuContainer";
import StyledMovieLink from "./StyledMovieLink";

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <Fragment>
        <StyledHeader>
          {/* Help icon extracted to a separate component */}
          <HelpMenuContainer />
          <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
          <FontAwesomeIcon icon="search" />
        </StyledHeader>
        {/* the list of movies */}
        <StyledHorizontalScroll>
          {this.props.loading ? (
            <StyledLoader />
          ) : (
            this.props.movies.map((movie) => (
              <StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
                <Movie
                  name={movie.name}
                  poster={movie.poster}
                  duration={movie.duration}
                  year={movie.year}
                />
              </StyledMovieLink>
            ))
          )}
        </StyledHorizontalScroll>
        <StyledFooter>
          <StyledLargeBtn>Get Recommended Movies</StyledLargeBtn>
        </StyledFooter>
      </Fragment>
    );
  }
}

export default Movies;
