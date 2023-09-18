import { useEffect } from "react";
import Question from "./Question";

const questionsData =[
    {
        'id': '1',
        'q': 'Can I post without any sign-up or without providing any data?',
        'a': ['Yes, you can post anything without providing any data(e.g. phone number, email address, ...), make sure you select the country and category suits your post.']
    },
    {
        'id': '2',
        'q': 'Can I modify the post after posted successfully?',
        'a': ['No, you cannot delete or update the post!']
    },
    {
        'id': '3',
        'q': 'What type of data collected?',
        'a' : ['only IP address is collected when you post or comment anything for some analysis and reasons, other parties such scripts and ad provider may collect other data.']
    },
    {
        'id': '4',
        'q': 'Can I use Markdown or HTML in post content?',
        'a': ['No, you can\'t use Markdown or HTML tags in the post content.', 'To add images or video you can upload it and for hyperlinks it will automatically be shown as link in the post!']
    },
    {
        'id': '5',
        'q': 'What type of link can be posted?',
        'a': ['Only HTTPs links can be posted otherwise it will shown as simple text.']
    }
]

const Questions = () => {
    useEffect(()=>{
        document.title = "FAQs"
    },[])

    return(
        <div className="p-2 py-5">
            <h2 className="text-3xl font-bold my-5 text-center">FAQs</h2>
            <div className="p-5">
                {questionsData.map(qa => <Question question={qa.q} answer={qa.a} key={qa.id} />)}
            </div>
        </div>
    )
}

export default Questions;
