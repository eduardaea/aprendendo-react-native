import axios from 'axios';

const baseURL = 'https://97defi6e06.execute-api.us-east-1.amazonaws.com/prod/palavras';

export function Api(){
    const [words, setWord] = React.useState('null');

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setWord(response.data);
        });
      }, []);

      return words;
};
