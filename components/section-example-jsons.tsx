"use client";

import { SeeExampleOutputDialog } from "@/components/see-example-output-dialog";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { P } from "@/components/ui/typography";
import { FormProps } from "@/hooks/use-playground-form";
import React from "react";

export const exampleFormValues: {
  [key: string]: FormProps & {
    output: any;
  };
} = {
  booksRead: {
    prompt: "Top science fiction books read in 2020",
    limit: 2,
    fields: [
      {
        name: "title",
        inputType: "string",
        description: "Title of the book",
      },
      {
        name: "author",
        inputType: "string",
        description: "Author of the book",
      },
      { name: "year", inputType: "number", description: "Year of the book" },
    ],
    output: [
      { title: "Dune", author: "Frank Herbert", year: "1965" },
      {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        year: "1969",
      },
    ],
  },
  rickAndMortyCharacters: {
    prompt: "List of Rick and Morty characters",
    limit: 5,
    fields: [
      {
        name: "full_name",
        inputType: "string",
        description:
          'first and last name of the character. If there is middle name, write first letter and put dot, like "Rick T. Sanchez"',
      },
      {
        name: "age",
        inputType: "string",
        description: "age of the character",
      },
      {
        name: "about",
        inputType: "number",
        description: "main traits of the character",
      },
    ],
    output: [
      {
        full_name: "Rick Sanchez",
        age: "70",
        about:
          "Rick is a genius scientist who is often troubled by his own inventions and has a nihilistic view on life.",
      },
      {
        full_name: "Morty Smith",
        age: "14",
        about:
          "Morty is Rick's good-hearted but easily distressed grandson who is frequently dragged into Rick's misadventures.",
      },
      {
        full_name: "Jerry Smith",
        age: "34",
        about:
          "Jerry is Morty's insecure father who dislikes Rick's influence over his family.",
      },
      {
        full_name: "Summer Smith",
        age: "17",
        about:
          "Summer is Morty's somewhat rebellious teenage sister who occasionally joins Rick on his adventures.",
      },
      {
        full_name: "Beth Smith",
        age: "34",
        about:
          "Beth is Morty's assertive mother and Rick's daughter. She is a horse surgeon.",
      },
    ],
  },
  randomNews: {
    prompt: "Generate random news about sport topic",
    limit: 5,
    fields: [
      {
        name: "title",
        inputType: "string",
        description: "title of the news",
      },
      {
        name: "published_date",
        inputType: "string",
        description:
          "Publish date of the news, it should be anytime in this week",
      },
      {
        name: "short_description",
        inputType: "number",
        description: "short description about the news",
      },
      {
        name: "description",
        inputType: "string",
        description:
          "long description about the news, just write a few paragraphs. 1000 character at maximum.",
      },
    ],
    output: [
      {
        title: "Grand Slam Victory for Serena Williams",
        published_date: "November 3, 2021",
        short_description:
          "Tennis superstar Serena Williams triumphed in the Grand Slam, marking her 24th major victory.",
        description:
          "Progressing through the tournament with outstanding performances, Serena Williams has secured a Grand Slam victory once again. Williams, who has a reputation for resilience and power, did not falter under the pressure of the challenging matches. This win takes her total major victories to 24, equaling the record held by Margaret Court. Williams' performance throughout the tournament was exemplary, demonstrating her skill, strategy, and unmatchable baseline powers.",
      },
      {
        title: "Lewis Hamilton Clinches Victory in Monza",
        published_date: "November 4, 2021",
        short_description:
          "In a dramatic twist, Lewis Hamilton wins the Italian Grand Prix, inching closer to his seventh World Championship title.",
        description:
          "Lewis Hamilton delivered a masterful driving performance at Monza to win the Italian Grand Prix. It was a race filled with intense battles, strategic plays and a thrilling finish that saw Hamilton beat out his closest rivals. With this win, Hamilton is edging closer to his record-tying seventh World Championship title.",
      },
      {
        title: "Lakers Take Dominant Win Over Golden State",
        published_date: "November 5, 2021",
        short_description:
          "The Lakers take a commanding victory over Golden State Warriors, showcasing their exceptional team performance.",
        description:
          "The Lakers have once again proven their dominance on the court with an outstanding victory over the Golden State Warriors. Showcasing a remarkable team performance, the Lakers managed to control the game from the outset, with every player contributing to the team's win. Their aggressive defense and seamless transitions led to this impressive victory.",
      },
      {
        title: "Sidney Crosby Strikes Hat-Trick in NHL Game",
        published_date: "November 6, 2021",
        short_description:
          "Penguins star Sidney Crosby scored an amazing three-goal hat-trick in Pittsburgh's game against Philadelphia.",
        description:
          "Ice Hockey all-star Sidney Crosby was the star of the show in Pittsburgh Penguins' game against Philadelphia Flyers, scoring an amazing three-goal hat-trick. His skills were on full display throughout the match, showing why he's considered one of the best players in the league. This hat-trick is a testament to Crosby's talent and a treat for Penguins' fans.",
      },
      {
        title: "Usain Bolt Returns to Athletics",
        published_date: "November 7, 2021",
        short_description:
          "Sprinter Usain Bolt declares his return to competitive athletics,",
      },
    ],
  },
  musicGenres: {
    prompt: "Music genres",
    limit: 20,
    fields: [
      {
        name: "title",
        inputType: "string",
        description: "Name of the genre",
      },
    ],

    output: [
      { title: "Pop" },
      { title: "Rock" },
      { title: "Rap" },
      { title: "Classical" },
      { title: "Jazz" },
      { title: "Blues" },
      { title: "Country" },
      { title: "Reggae" },
      { title: "Electronic" },
      { title: "Heavy Metal" },
      { title: "Soul" },
      { title: "Hip Hop" },
      { title: "Alternative" },
      { title: "Punk" },
      { title: "Folk" },
      { title: "R&B" },
      { title: "Disco" },
      { title: "Funk" },
      { title: "Techno" },
      { title: "Gospel" },
    ],
  },
  actors: {
    prompt: "List of random legendary actors who had role in Hollywood",
    limit: 15,
    fields: [
      {
        name: "first_name",
        inputType: "string",
        description: "First name of the actor",
      },
      {
        name: "last_name",
        inputType: "string",
        description: "Last name of the actor",
      },
      { name: "age", inputType: "number", description: "Age of the actor" },
      {
        name: "movies",
        inputType: "string",
        description:
          "Names of the movies the actor had role, separated with comma",
      },
      {
        name: "country",
        inputType: "string",
        description: "Root country of the actor",
      },
    ],
    output: [
      {
        first_name: "Robert",
        last_name: "De Niro",
        age: "77",
        movies: "The Godfather Part II, Taxi Driver, Raging Bull",
        country: "USA",
      },
      {
        first_name: "Marlon",
        last_name: "Brando",
        age: "80",
        movies: "The Godfather, On the Waterfront, Apocalypse Now",
        country: "USA",
      },
      {
        first_name: "Al",
        last_name: "Pacino",
        age: "81",
        movies: "The Godfather, Scarface, Scent of a Woman",
        country: "USA",
      },
      {
        first_name: "Jack",
        last_name: "Nicholson",
        age: "84",
        movies: "The Shining, Chinatown, One Flew Over the Cuckoo's Nest",
        country: "USA",
      },
      {
        first_name: "Morgan",
        last_name: "Freeman",
        age: "84",
        movies: "The Shawshank Redemption, Se7en, Invictus",
        country: "USA",
      },
      {
        first_name: "Sean",
        last_name: "Connery",
        age: "90",
        movies: "Goldfinger, The Hunt for Red October, The Rock",
        country: "Scotland",
      },
      {
        first_name: "Tom",
        last_name: "Hanks",
        age: "65",
        movies: "Forrest Gump, Saving Private Ryan, The Green Mile",
        country: "USA",
      },
      {
        first_name: "Anthony",
        last_name: "Hopkins",
        age: "83",
        movies: "The Silence of the Lambs, Thor, Legends of the Fall",
        country: "Wales",
      },
      {
        first_name: "Denzel",
        last_name: "Washington",
        age: "66",
        movies: "Training Day, Glory, Flight",
        country: "USA",
      },
      {
        first_name: "Samuel L.",
        last_name: "Jackson",
        age: "72",
        movies: "Pulp Fiction, Snakes on a Plane, The Avengers",
        country: "USA",
      },
      {
        first_name: "Gary",
        last_name: "Oldman",
        age: "63",
        movies: "Tinker Tailor Soldier Spy, The Dark Knight, Darkest Hour",
        country: "UK",
      },
      {
        first_name: "Clint",
        last_name: "Eastwood",
        age: "91",
        movies: "Unforgiven, Million Dollar Baby, Gran Torino",
        country: "USA",
      },
      {
        first_name: "Dustin",
        last_name: "Hoffman",
        age: "83",
        movies: "The Graduate, Midnight Cowboy, Tootsie",
        country: "USA",
      },
      {
        first_name: "Daniel",
        last_name: "Day-Lewis",
        age: "64",
        movies: "My Left Foot, There Will Be Blood, Gangs of New York",
        country: "UK",
      },
      {
        first_name: "Leonardo",
        last_name: "DiCaprio",
        age: "46",
        movies: "Inception, The Wolf of Wall Street, Titanic",
      },
    ],
  },
  programmingLanguages: {
    prompt: "Object-oriented programming languages",
    limit: 15,
    fields: [
      {
        name: "name",
        inputType: "string",
        description: "Name of the language",
      },
      {
        name: "publish_date",
        inputType: "string",
        description: "First publish date of the language",
      },
      {
        name: "description",
        inputType: "string",
        description:
          "Few information about the language, which places used, in which projects etc.",
      },
    ],
    output: [
      {
        name: "Java",
        publish_date: "1995",
        description:
          "Java is a general-purpose programming language that is class-based and object-oriented. It is designed to have as few implementation dependencies as possible. Java is used for developing Android apps, server apps at financial services industry, in creating web apps.",
      },
      {
        name: "Python",
        publish_date: "1991",
        description:
          "Python is an interpreted high-level general-purpose programming language. It emphasizes readability with its notable use of significant indentation. Python is used in web development, artificial intelligence, scientific computing, and data analysis.",
      },
      {
        name: "C++",
        publish_date: "1985",
        description:
          "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It's prevalent in systems software, game development, drivers, client-server applications, and embedded firmware.",
      },
      {
        name: "C#",
        publish_date: "2000",
        description:
          "C# is a general-purpose, multi-paradigm programming language that's part of the .Net family from Microsoft. It's used in many Microsoft products and services, including the Windows operating system.",
      },
      {
        name: "Ruby",
        publish_date: "1995",
        description:
          "Ruby is an interpreted high-level programming language that emphasizes simplicity and productivity. It is commonly used in web development and other scripting tasks.",
      },
      {
        name: "JavaScript",
        publish_date: "1995",
        description:
          "JavaScript is a high-level, interpreted scripting language that conforms to the ECMAScript specification. It is often used to enhance web pages, for server applications and servers, and for developing desktop and mobile applications.",
      },
      {
        name: "PHP",
        publish_date: "1995",
        description:
          "PHP is a popular general-purpose scripting language that is especially suited to web development. It is ideal for server-side web development, where PHP generally runs on a web server.",
      },
      {
        name: "Objective-C",
        publish_date: "1984",
        description:
          "Objective-C is a general-purpose, object-oriented programming language. It was the main programming language used by Apple for the macOS and iOS operating systems.",
      },
      {
        name: "Swift",
        publish_date: "2014",
        description:
          "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. It is used for developing apps on iOS, macOS, watchOS, and tvOS.",
      },
      {
        name: "Perl",
        publish_date: "1987",
        description:
          "Perl is a family of two high-level, general-purpose, interpreted scripting languages. It's widely used for mission-critical projects in the public and private sectors.",
      },
      { name: "Rust", publish_date: "2010" },
    ],
  },
  topEuropeCountries: {
    prompt: "Get the top 10 countries in Europe",
    limit: 10,
    fields: [
      {
        name: "name",
        inputType: "string",
        description: "The name of the country",
      },
      {
        name: "capital",
        inputType: "string",
        description: "The capital of the country",
      },
      {
        name: "country_code",
        inputType: "string",
        description: "The two-three letter code of the country",
      },
      {
        name: "description",
        inputType: "string",
        description: "A few informations about the country ",
      },
    ],
    output: [
      {
        name: "Russia",
        capital: "Moscow",
        country_code: "RU",
        description:
          "It is the most populous country in Europe and one of the world's largest countries in terms of area.",
      },
      {
        name: "Germany",
        capital: "Berlin",
        country_code: "DE",
        description:
          "Germany has a social market economy with a highly skilled labor force, large capital stock, a low level of corruption, and a high level of innovation.",
      },
      {
        name: "United Kingdom",
        capital: "London",
        country_code: "GB",
        description:
          "The UK, a leading trading power and financial center, is the third-largest economy in Europe after Germany and France.",
      },
      {
        name: "France",
        capital: "Paris",
        country_code: "FR",
        description:
          "France is a semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial center.",
      },
      {
        name: "Italy",
        capital: "Rome",
        country_code: "IT",
        description:
          "Italy has a developed industrial north, dominated by private companies, and a less-developed, highly subsidized agriculture-based south.",
      },
      {
        name: "Spain",
        capital: "Madrid",
        country_code: "ES",
        description:
          "Spain is a secular parliamentary democracy and a parliamentary monarchy, with King Felipe VI as head of state.",
      },
      {
        name: "Ukraine",
        capital: "Kyiv",
        country_code: "UA",
        description:
          "Ukraine includes the Crimean Peninsula, which Russia annexed in 2014 but is still recognized by most international bodies as part of Ukraine.",
      },
      {
        name: "Poland",
        capital: "Warsaw",
        country_code: "PL",
        description:
          "Poland's economy is considered to be one of the healthiest among the post-Communist countries and is currently one of the fast-growing within the EU.",
      },
      {
        name: "Romania",
        capital: "Bucharest",
        country_code: "RO",
        description:
          "Romania is the twelfth-largest country in Europe, and the sixth-most populous member state of the European Union.",
      },
      {
        name: "Netherlands",
        capital: "Amsterdam",
        country_code: "NL",
        description:
          "The Netherlands has a developed economy and has been playing a special role in the European economy for many centuries.",
      },
    ],
  },
};

type ItemProps = {
  item: FormProps | null;
  onSelectExample: (item: FormProps | null) => void;
};

function Item({ item, onSelectExample }: ItemProps) {
  return (
    <div
      onClick={() => {
        onSelectExample(item);
      }}
      className="group min-w-[256px] w-[256px] border flex items-center justify-center border-primary/20 rounded p-4 cursor-pointer hover:border-muted-foreground hover:shadow-md transition-colors"
    >
      <P className="group-hover:text-primary text-primary/70 line-clamp-2 leading-tight">
        {item?.prompt}
      </P>
    </div>
  );
}

const firstRowExamples = [
  exampleFormValues.rickAndMortyCharacters,
  exampleFormValues.actors,
  exampleFormValues.booksRead,
  exampleFormValues.musicGenres,
];

const secondRowExamples = [
  exampleFormValues.randomNews,
  exampleFormValues.programmingLanguages,
  exampleFormValues.topEuropeCountries,
  exampleFormValues.actors,
];

export function SectionExampleJSONs() {
  const [selectedExample, setSelectedExample] =
    React.useState<FormProps | null>(null);

  return (
    <React.Fragment>
      <SeeExampleOutputDialog
        item={selectedExample}
        setOpen={() => setSelectedExample(null)}
      />
      <Column className="gap-2 w-full max-w-[90vw]">
        <Row className=" examples-container overflow-hidden">
          <Row className="examples-row gap-2">
            <Row className="gap-2 overflow-hidden">
              {firstRowExamples.map((item, index) => (
                <Item
                  key={`example-${item.prompt}-${index}`}
                  item={item}
                  onSelectExample={setSelectedExample}
                />
              ))}
            </Row>
            <Row className="gap-2">
              {firstRowExamples.map((item, index) => (
                <Item
                  key={`example-row-2-${item.prompt}-${index}`}
                  item={item}
                  onSelectExample={setSelectedExample}
                />
              ))}
            </Row>
          </Row>
        </Row>
        <Row className="examples-container overflow-hidden">
          <Row className="examples-row2 gap-2">
            <Row className="gap-2">
              {secondRowExamples.map((item, index) => (
                <Item
                  key={`example-${item.prompt}-${index}`}
                  item={item}
                  onSelectExample={setSelectedExample}
                />
              ))}
            </Row>
            <Row className="gap-2">
              {secondRowExamples.map((item, index) => (
                <Item
                  key={`example-row-2-${item.prompt}-${index}`}
                  item={item}
                  onSelectExample={setSelectedExample}
                />
              ))}
            </Row>
          </Row>
        </Row>
      </Column>
    </React.Fragment>
  );
}
