import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock } from 'lucide-react';
import { classes } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function ClassSchedule() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Today's Classes</CardTitle>
        <CardDescription>Your schedule and attendance overview.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-6">
          {classes.map((c) => (
            <div key={c.id} className="flex items-start gap-4 transition-transform hover:scale-[1.02]">
              <div className="bg-muted rounded-full p-3">
                <BookOpen className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-lg">{c.subject}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{c.time}</span>
                </div>
                <div className="mt-2 pt-2">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                    <span className={cn(
                      "text-sm font-bold",
                      c.attendance < 75 ? "text-destructive" : "text-accent"
                    )}>
                      {c.attendance}%
                    </span>
                  </div>
                  <Progress 
                    value={c.attendance} 
                    aria-label={`${c.attendance}% attendance`} 
                    className={cn(c.attendance < 75 && '[&>div]:bg-destructive')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
