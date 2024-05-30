import { HiCalendar, HiCode, HiLightningBolt } from 'react-icons/hi'
import { Timeline } from 'flowbite-react'

export default function Events() {
    return (
        <div className="mt-9 shadow-2xl p-10 rounded-2xl w-10/12 mb-20 flex flex-col items-center mx-auto">
            <h1 className="text-center text-8xl max-lg:text-4xl font-serif text-black dark:text-white">Events</h1>
            <Timeline className="mt-5 ml-5">
            <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>2024</Timeline.Time>
                        <Timeline.Title>Comming Soon</Timeline.Title>
                        <Timeline.Body>
                            More events are coming soon. Stay tuned for more updates.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiLightningBolt} />
                    <Timeline.Content>
                        <Timeline.Time>2 May 2024</Timeline.Time>
                        <Timeline.Title>Code ⚡ Blaze</Timeline.Title>
                        <Timeline.Body>
                            Coding event organised with collaboration of Coding Ninjas, where more than 500 students participated.
                            Top 3 students were awarded with goodies and certificates, rest were given participation certificates.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCode} />
                    <Timeline.Content>
                        <Timeline.Time>29 December 2023</Timeline.Time>
                        <Timeline.Title>CODE-QUEST</Timeline.Title>
                        <Timeline.Body>
                            A 6 hour coding solo event where students were given 12 DSA problems to solve.
                            Winner was awarded with cash prize of 5,000 INR and 2nd runner up was awarded with goodies.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Past events
            </button>
        </div>
    )
}