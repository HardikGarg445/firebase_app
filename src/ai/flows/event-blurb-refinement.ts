'use server';

/**
 * @fileOverview Refines event descriptions into appealing text blurbs using GenAI.
 *
 * - refineEventBlurb - A function that refines the event blurb.
 * - RefineEventBlurbInput - The input type for the refineEventBlurb function.
 * - RefineEventBlurbOutput - The return type for the refineEventBlurb function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineEventBlurbInputSchema = z.object({
  description: z.string().describe('The original event description to refine.'),
});
export type RefineEventBlurbInput = z.infer<typeof RefineEventBlurbInputSchema>;

const RefineEventBlurbOutputSchema = z.object({
  refinedBlurb: z.string().describe('The refined and appealing event blurb.'),
});
export type RefineEventBlurbOutput = z.infer<typeof RefineEventBlurbOutputSchema>;

export async function refineEventBlurb(input: RefineEventBlurbInput): Promise<RefineEventBlurbOutput> {
  return refineEventBlurbFlow(input);
}

const refineEventBlurbPrompt = ai.definePrompt({
  name: 'refineEventBlurbPrompt',
  input: {schema: RefineEventBlurbInputSchema},
  output: {schema: RefineEventBlurbOutputSchema},
  prompt: `You are an expert event marketing copywriter.

  Please refine the following event description into an appealing and engaging text blurb that will attract more attendees. Do not change the title or timestamp, focus on making the description more exciting and informative.

  Original Description: {{{description}}}`,
});

const refineEventBlurbFlow = ai.defineFlow(
  {
    name: 'refineEventBlurbFlow',
    inputSchema: RefineEventBlurbInputSchema,
    outputSchema: RefineEventBlurbOutputSchema,
  },
  async input => {
    const {output} = await refineEventBlurbPrompt(input);
    return output!;
  }
);
