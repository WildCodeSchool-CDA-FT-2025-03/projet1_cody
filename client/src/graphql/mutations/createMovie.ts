import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
  mutation CreateMovie(
    $title: String!
    $subtitle: String
    $directors: String
    $writers: String
    $producers: String
    $studios: String
    $release_date: String
    $isbn_ean_upc: String
    $format: String
    $duration: Float
    $category: String
    $summary: String
    $keywords: String
    $targeted_audience: String
    $original_language: String
    $series: Boolean
    $budget: Float
    $box_office: Float
    $image_url: String
    $image_alt: String
  ) {
    createMovie(
      title: $title
      subtitle: $subtitle
      directors: $directors
      writers: $writers
      producers: $producers
      studios: $studios
      release_date: $release_date
      isbn_ean_upc: $isbn_ean_upc
      format: $format
      duration: $duration
      category: $category
      summary: $summary
      keywords: $keywords
      targeted_audience: $targeted_audience
      original_language: $original_language
      series: $series
      budget: $budget
      box_office: $box_office
      image_url: $image_url
      image_alt: $image_alt
    ) {
      id
      title
    }
  }
`;
