import { ClassSchedule } from '@/components/agora/ClassSchedule';
import { EventList } from '@/components/agora/EventList';
import { Header } from '@/components/agora/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ClassSchedule />
          </div>
          <div>
            <EventList />
          </div>
        </div>
      </main>
    </div>
  );
}
