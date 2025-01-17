'use client'

import { cn } from '@/lib/utils'
import { useChat } from 'ai/react'
import { ArrowUpIcon, DatabaseIcon, Globe2Icon, SearchIcon, Settings2Icon, SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AutoResizeTextarea } from '@/components/autoresize-textarea'

export function ChatForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const { messages, input, setInput, append, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: 'You are a helpful Crustdata API documentation assistant. You help users understand how to use Crustdata\'s APIs for company search, person search, and data enrichment. Always provide clear, technical, and accurate responses about the API functionality.'
      }
    ]
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    void append({ content: input, role: 'user' })
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const documentationCards = [
    {
      icon: <DatabaseIcon className="w-6 h-6" />,
      title: 'API Endpoints',
      description: 'Company Search, Person Search, and Data Enrichment endpoints',
    },
    {
      icon: <Globe2Icon className="w-6 h-6" />,
      title: 'Authentication',
      description: 'API key authentication and rate limiting guidelines',
    },
    {
      icon: <SearchIcon className="w-6 h-6" />,
      title: 'Query Parameters',
      description: 'Filter options and search parameters for precise data retrieval',
    },
    {
      icon: <Settings2Icon className="w-6 h-6" />,
      title: 'Response Format',
      description: 'Understanding API response structure and data fields',
    },
  ]

  const suggestedQueries = [
    'How to authenticate API requests?',
    'Show company search endpoint',
    'Explain person search filters',
    'Data enrichment examples',
  ]

  const header = (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D37F]/20 to-emerald-500/20 blur-3xl" />
        <div className="relative rounded-2xl bg-gradient-to-br from-[#00D37F] to-emerald-600 p-8">
          <div className="size-16">
            <DatabaseIcon className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00D37F] to-emerald-500">
          Crustdata API Documentation
        </h1>
        <p className="text-base text-gray-400">
          Interactive guide for Crustdata's API endpoints and integration
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {documentationCards.map((card, index) => (
          <Card
            key={index}
            className="group p-6 bg-gray-800/30 backdrop-blur-sm border-gray-700/50 hover:border-[#00D37F]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00D37F]/5"
          >
            <div className="space-y-4">
              <div className="text-[#00D37F] transform transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  const messageList = (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      {messages.map((message, index) => (
        message.role !== 'system' && (
          <div
            key={index}
            data-role={message.role}
            className="max-w-[80%] rounded-xl px-4 py-3 text-sm transition-all duration-300
              data-[role=assistant]:self-start data-[role=user]:self-end 
              data-[role=assistant]:bg-gray-800/80 data-[role=user]:bg-gradient-to-r 
              data-[role=user]:from-[#00D37F] data-[role=user]:to-emerald-500
              data-[role=assistant]:text-white data-[role=user]:text-black
              data-[role=assistant]:shadow-md hover:shadow-lg
              animate-in slide-in-from-bottom-2"
          >
            {message.content}
          </div>
        )
      ))}
    </div>
  )

  return (
    <main
      className={cn(
        'mx-auto flex h-[calc(100vh-4rem)] w-full max-w-4xl flex-col items-stretch',
        className
      )}
      {...props}
    >
      <div className="flex-1 overflow-y-auto px-6 py-8 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-700">
        {messages.length > 1 ? messageList : header}
      </div>
      <div className="border-t border-gray-800/50 bg-gray-900/80 backdrop-blur-sm px-6 py-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedQueries.map((query, index) => (
            <button
              key={index}
              onClick={() => setInput(query)}
              className="text-sm px-4 py-1.5 rounded-full bg-gray-800/50 text-gray-300 
                hover:bg-gray-700/50 hover:text-white transition-all duration-300
                border border-gray-700/30 hover:border-[#00D37F]/30
                hover:shadow-md hover:shadow-[#00D37F]/5"
            >
              {query}
            </button>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center rounded-xl border border-gray-700/50 
            bg-gray-800/30 backdrop-blur-sm px-4 py-3 
            focus-within:border-[#00D37F]/50 focus-within:shadow-lg focus-within:shadow-[#00D37F]/5
            transition-all duration-300"
        >
          <AutoResizeTextarea
            onKeyDown={handleKeyDown}
            onChange={v => setInput(v)}
            value={input}
            placeholder="Ask about Crustdata API"
            className="flex-1 bg-transparent text-white placeholder:text-gray-400 focus:outline-none min-h-[20px]"
          />
          <Button
            type="submit"
            size="sm"
            className={cn(
              "size-10 rounded-lg transition-all duration-300",
              isLoading
                ? "bg-gray-700 text-gray-300"
                : "bg-gradient-to-r from-[#00D37F] to-emerald-500 text-black hover:shadow-lg hover:shadow-[#00D37F]/20 hover:scale-105"
            )}
            disabled={!input.trim() || isLoading}
          >
            {isLoading ? (
              <div className="size-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
            ) : (
              <SendIcon size={16} />
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}

