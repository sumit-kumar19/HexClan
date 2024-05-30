import { HiCalendar } from 'react-icons/hi'
import { Timeline } from 'flowbite-react'

export default function Events() {
    return (
        <div className="flex justify-center items-center flex-col">
            <Timeline className="mt-20">
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>2 May 2024</Timeline.Time>
                        <Timeline.Title>Code ⚡ Blaze</Timeline.Title>
                        <Timeline.Body>
                            Coding event organised with collaboration of Coding Ninjas, where more than 500 students participated.
                            Top 10 students were awarded with goodies and certificates.
                            
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}