import React, { useState } from 'react'

// import {
//   actions,
//   AppStatus,
//   thunkActions,
//   useAppDispatch,
//   useAppSelector,
// } from './store/provider'
import { Search, FileText } from "lucide-react";
import axios from "axios";
// import SearchInput from './components/search_input'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  // const dispatch = useAppDispatch()
  // const status = useAppSelector((state) => state.status)
  // const sources = useAppSelector((state) => state.sources)

  // const [summary, ...messages] = useAppSelector((state) => state.conversation)
  // const hasSummary = useAppSelector(
  //   (state) => !!state.conversation?.[0]?.content
  // )
  // const [searchQuery, setSearchQuery] = useState<string>('')

  // const handleSearch = (query: string) => {
  //   dispatch(thunkActions.search(query))
  // }
  // const handleSendChatMessage = (query: string) => {
  //   dispatch(thunkActions.askQuestion(query))
  // }
  // const handleAbortRequest = () => {
  //   dispatch(thunkActions.abortRequest())
  // }
  // const handleToggleSource = (name: any) => {
  //   dispatch(actions.sourceToggle({ name }))
  // }
  // const handleSourceClick = (name: any) => {
  //   dispatch(actions.sourceToggle({ name, expanded: true }))

  //   setTimeout(() => {
  //     document
  //       .querySelector(`[data-source="${name}"]`)
  //       ?.scrollIntoView({ behavior: 'smooth' })
  //   }, 300)
  // }
  const suggestedQueries = [
    "What is our work from home policy?",
    "What's the NASA sales team?",
    "Does the company own my side project?",
    "What job openings do we have?",
    "How does compensation work?",
  ];
  const hasSummary = true;
  return (
    <>
      <p>head</p>

      <div className="p-4 max-w-2xl mx-auto">
        <p>SearchInput</p>

        {hasSummary ? (
          <div className="mx-auto my-6">
            <h2 className="text-zinc-400 text-sm font-medium mb-3  inline-flex items-center gap-2">
              <p>ChatIcon</p> Common questions
            </h2>
            <div className="flex flex-col space-y-4">
              {suggestedQueries.map((query) => (
                <button
                  key={query}
                  className="hover:-translate-y-1 hover:shadow-lg hover:bg-zinc-300 transition-transform h-12 px-4 py-2 bg-zinc-200 rounded-md shadow flex items-center text-zinc-700"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setSearchQuery(query);
                  //   handleSearch(query);
                  // }}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {hasSummary ? (
              <div className="max-w-2xl mx-auto relative">
                <p>Chat</p> 
                <p>SearchResults</p>             
              </div>
            ) : (
              <div className="h-36 p-6 bg-white rounded-md shadow flex flex-col justify-start items-center gap-4 mt-6">
                <p>ElasticLogo</p>
                <p className="text-center text-zinc-400 text-sm ">
                  Looking that up for you...
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
