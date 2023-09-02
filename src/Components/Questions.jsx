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
        'q': 'What type of data collected by F4nsix?',
        'a' : ['F4nsix collects only IP address when you post or comment anything for some analysis and reasons, other parties such scripts and ad provider may collect other data.']
    },
    {
        'id': '4',
        'q': 'Is there any limit of posting comments or post?',
        'a': ['Yes, you can post upto 15 Comments in an hour and 8 Posts in an hour.']
    },
    {
        'id': '5',
        'q': 'Can post be removed F4nsix?',
        'a': ['If your post contain abusive content or any hateful content that harms it may be removed or hidden!']
    },
    {
        'id': '6',
        'q': 'How to report the post?',
        'a': ['You don\'t have to report the post, it will be manually checked by F4nsix.']
    },
    {
        'id': '7',
        'q': 'Can I use Markdown or HTML in post content?',
        'a': ['No, you can\'t use Markdown or HTML tags in the post content.', 'To add images or video you can upload it and for hyperlinks it will automatically be shown as link in the post!']
    },
    {
        'id': '8',
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
            <GAd />
        </div>
    )
}

export default Questions;
