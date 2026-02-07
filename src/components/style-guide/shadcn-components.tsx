import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Check, Info, Star } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ComponentShowcaseProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ComponentShowcase({ title, description, children }: ComponentShowcaseProps) {
  return (
    <div className="border border-airbnb-light-gray rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-airbnb-light-gray bg-airbnb-pale">
        <h4 className="font-semibold text-airbnb-dark">{title}</h4>
        <p className="text-sm text-airbnb-gray">{description}</p>
      </div>
      <div className="p-6 bg-white">{children}</div>
    </div>
  );
}

export function ShadcnComponentsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-airbnb-dark mb-2">Shadcn/UI Components</h2>
      <p className="text-airbnb-gray mb-8">Base UI primitives from the shadcn/ui library</p>

      <div className="space-y-8">
        <ComponentShowcase
          title="Button"
          description="Interactive button component with multiple variants and sizes"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Star className="w-4 h-4" /></Button>
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Input"
          description="Text input field for user data entry"
        >
          <div className="space-y-4 max-w-sm">
            <Input placeholder="Default input" />
            <Input type="email" placeholder="Email address" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Textarea"
          description="Multi-line text input for longer content"
        >
          <Textarea placeholder="Type your message here..." className="max-w-md" />
        </ComponentShowcase>

        <ComponentShowcase
          title="Checkbox & Switch"
          description="Toggle controls for boolean selections"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Slider"
          description="Range input for selecting values from a continuous range"
        >
          <div className="space-y-6 max-w-sm">
            <Slider defaultValue={[50]} max={100} step={1} />
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Badge"
          description="Small status indicators and labels"
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Avatar"
          description="User profile images with fallback initials"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Progress"
          description="Visual indicator for task completion or loading state"
        >
          <div className="space-y-4 max-w-md">
            <Progress value={25} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Skeleton"
          description="Placeholder loading states for content"
        >
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Card"
          description="Container for grouped content and actions"
        >
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch id="email-notifs" defaultChecked />
                <Label htmlFor="email-notifs">Email notifications</Label>
              </div>
            </CardContent>
          </Card>
        </ComponentShowcase>

        <ComponentShowcase
          title="Tabs"
          description="Organize content into switchable panels"
        >
          <Tabs defaultValue="account" className="max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4">
              <p className="text-sm text-airbnb-gray">Manage your account details and preferences.</p>
            </TabsContent>
            <TabsContent value="password" className="mt-4">
              <p className="text-sm text-airbnb-gray">Change your password and security settings.</p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <p className="text-sm text-airbnb-gray">Configure application settings.</p>
            </TabsContent>
          </Tabs>
        </ComponentShowcase>

        <ComponentShowcase
          title="Accordion"
          description="Vertically stacked collapsible panels"
        >
          <Accordion type="single" collapsible className="max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It includes smooth open/close animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentShowcase>

        <ComponentShowcase
          title="Alert"
          description="Attention-grabbing messages and notifications"
        >
          <div className="space-y-4 max-w-lg">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert to provide helpful context.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Tooltip"
          description="Brief contextual information on hover"
        >
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Check className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mark as complete</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ComponentShowcase>

        <ComponentShowcase
          title="Separator"
          description="Visual divider between content sections"
        >
          <div className="max-w-md">
            <p className="text-sm text-airbnb-gray">Content above the separator</p>
            <Separator className="my-4" />
            <p className="text-sm text-airbnb-gray">Content below the separator</p>
          </div>
        </ComponentShowcase>
      </div>
    </div>
  );
}
