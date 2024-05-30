import { HiCalendar } from 'react-icons/hi'
import { Timeline } from 'flowbite-react'

export default function Events() {
    return (
        <div className="flex justify-center items-center flex-col mt-10 mr-40 ml-40">
            <Timeline>
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
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>2 May 2024</Timeline.Time>
                        <Timeline.Title>Code ⚡ Blaze</Timeline.Title>
                        <Timeline.Body>
                            Coding event organised with collaboration of Coding Ninjas, where more than 500 students participated.
                            Top 3 students were awarded with goodies and certificates, rest were given participation certificates.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}